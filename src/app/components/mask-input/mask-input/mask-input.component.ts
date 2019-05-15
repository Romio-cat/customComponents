import { Component, OnInit, forwardRef, ElementRef, ViewChild, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mask-input',
  templateUrl: './mask-input.component.html',
  styleUrls: ['./mask-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MaskInputComponent),
      multi: true,
    }
  ]
})
export class MaskInputComponent implements ControlValueAccessor, OnInit {
  @ViewChild('mdInputEl') public mdInputEl: ElementRef;

  @Input() mask: any[];
  @Input() title: string;

  public mdInput = new FormControl();
  private _previousValue = '';
  private _previousPlaceholder = '';
  private _maxInputValue: number;
  private _currentCursorPosition: number;
  private readonly _placeholderChar = '_';

  public ngOnInit(): void {
    this._maxInputValue = this.mask.length;

    this.mdInput.valueChanges
      .subscribe((value: string) => {
        if (!value || value === this._previousValue) {
          return;
        }

        this._currentCursorPosition = this.mdInputEl.nativeElement.selectionEnd;

        const placeholder = this._convertMaskToPlaceholder();
        const values = this._conformValue(value, placeholder);
        const adjustedCursorPosition = this._getCursorPosition(value, placeholder, values.conformed);

        this.mdInputEl.nativeElement.value = values.conformed;
        this.mdInputEl.nativeElement.setSelectionRange(
          adjustedCursorPosition,
          adjustedCursorPosition,
          'none');

        this._onChange(values.cleaned);

        this._previousValue = values.conformed;
        this._previousPlaceholder = placeholder;
      },
        (err) => console.warn(err)
      );
  }

  public writeValue(value: string): void {
    const placeholder = this._convertMaskToPlaceholder();
    const values = this._conformValue(value, placeholder);

    this._currentCursorPosition = this.mdInputEl.nativeElement.selectionEnd;
    this.mdInputEl.nativeElement.value = values.conformed;
    this.mdInput.setValue(values.conformed);
  }

  public registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  private _onChange: Function = (_: any) => {
  }

  private _onTouched: Function = (_: any) => {
  }

  private _convertMaskToPlaceholder(): string {
    return this.mask.map((char) => {
      return (char instanceof RegExp) ? this._placeholderChar : char;
    }).join('');
  }

  private _conformValue(value: string, placeholder: string): { conformed: string, cleaned: string } {
    const editDistance = value.length - this._previousValue.length;
    const isAddition = editDistance > 0;
    const indexOfFirstChange = this._currentCursorPosition + (isAddition ? -editDistance : 0);
    const indexOfLastChange = indexOfFirstChange + Math.abs(editDistance);

    if (!isAddition) {
      let compensatingPlaceholderChars = '';

      for (let i = indexOfFirstChange; i < indexOfLastChange; i++) {
        if (placeholder[i] === this._placeholderChar) {
          compensatingPlaceholderChars += this._placeholderChar;
        }
      }

      value =
        (value.slice(0, indexOfFirstChange) +
          compensatingPlaceholderChars +
          value.slice(indexOfFirstChange, value.length)
        );
    }

    const valueArr = value.split('');

    for (let i = value.length - 1; i >= 0; i--) {
      const char = value[i];

      if (char !== this._placeholderChar) {
        const shouldOffset = i >= indexOfFirstChange &&
          this._previousValue.length === this._maxInputValue;

        if (char === placeholder[(shouldOffset) ? i - editDistance : i]) {
          valueArr.splice(i, 1);
        }
      }
    }

    let conformedValue = '';
    let cleanedValue = '';

    placeholderLoop: for (let i = 0; i < placeholder.length; i++) {
      const charInPlaceholder = placeholder[i];

      if (charInPlaceholder === this._placeholderChar) {
        if (valueArr.length > 0) {
          while (valueArr.length > 0) {
            const valueChar = valueArr.shift();

            if (valueChar === this._placeholderChar) {
              conformedValue += this._placeholderChar;

              continue placeholderLoop;
            } else if (this.mask[i].test(valueChar)) {
              conformedValue += valueChar;
              cleanedValue += valueChar;

              continue placeholderLoop;
            }
          }
        }

        conformedValue += placeholder.substr(i, placeholder.length);
        break;
      } else {
        conformedValue += charInPlaceholder;
      }
    }

    return { conformed: conformedValue, cleaned: cleanedValue };
  }

  private _getCursorPosition(value: string, placeholder: string, conformedValue: string): number {
    if (this._currentCursorPosition === 0) {
      return 0;
    }

    const editLength = value.length - this._previousValue.length;
    const isAddition = editLength > 0;
    const isFirstValue = this._previousValue.length === 0;
    const isPartialMultiCharEdit = editLength > 1 && !isAddition && !isFirstValue;

    if (isPartialMultiCharEdit) {
      return this._currentCursorPosition;
    }

    const possiblyHasRejectedChar = isAddition && (
      this._previousValue === conformedValue ||
      conformedValue === placeholder);

    let startingSearchIndex = 0;
    let trackRightCharacter;
    let targetChar;

    if (possiblyHasRejectedChar) {
      startingSearchIndex = this._currentCursorPosition - editLength;
    } else {
      const normalizedConformedValue = conformedValue.toLowerCase();
      const normalizedValue = value.toLowerCase();
      const leftHalfChars = normalizedValue.substr(0, this._currentCursorPosition).split('');
      const intersection = leftHalfChars.filter((char) => normalizedConformedValue.indexOf(char) !== -1);

      targetChar = intersection[intersection.length - 1];

      const previousLeftMaskChars = this._previousPlaceholder
        .substr(0, intersection.length)
        .split('')
        .filter((char) => char !== this._placeholderChar)
        .length;

      const leftMaskChars = placeholder
        .substr(0, intersection.length)
        .split('')
        .filter((char) => char !== this._placeholderChar)
        .length;

      const maskLengthChanged = leftMaskChars !== previousLeftMaskChars;

      const targetIsMaskMovingLeft = (
        this._previousPlaceholder[intersection.length - 1] !== undefined &&
        placeholder[intersection.length - 2] !== undefined &&
        this._previousPlaceholder[intersection.length - 1] !== this._placeholderChar &&
        this._previousPlaceholder[intersection.length - 1] !== placeholder[intersection.length - 1] &&
        this._previousPlaceholder[intersection.length - 1] === placeholder[intersection.length - 2]
      );

      if (!isAddition &&
        (maskLengthChanged || targetIsMaskMovingLeft) &&
        previousLeftMaskChars > 0 &&
        placeholder.indexOf(targetChar) > -1 &&
        value[this._currentCursorPosition] !== undefined) {
        trackRightCharacter = true;
        targetChar = value[this._currentCursorPosition];
      }

      const countTargetCharInIntersection = intersection.filter((char) => char === targetChar).length;

      const countTargetCharInPlaceholder = placeholder
        .substr(0, placeholder.indexOf(this._placeholderChar))
        .split('')
        .filter((char, index) => (
          char === targetChar &&
          value[index] !== char
        )).length;

      const requiredNumberOfMatches =
        (countTargetCharInPlaceholder + countTargetCharInIntersection + (trackRightCharacter ? 1 : 0));

      let numberOfEncounteredMatches = 0;

      for (let i = 0; i < conformedValue.length; i++) {
        const conformedValueChar = normalizedConformedValue[i];

        startingSearchIndex = i + 1;

        if (conformedValueChar === targetChar) {
          numberOfEncounteredMatches++;
        }

        if (numberOfEncounteredMatches >= requiredNumberOfMatches) {
          break;
        }
      }
    }

    if (isAddition) {
      let lastPlaceholderChar = startingSearchIndex;

      for (let i = startingSearchIndex; i <= placeholder.length; i++) {
        if (placeholder[i] === this._placeholderChar) {
          lastPlaceholderChar = i;
        }

        if (placeholder[i] === this._placeholderChar || i === placeholder.length) {
          return lastPlaceholderChar;
        }
      }
    } else {
      if (trackRightCharacter) {
        for (let i = startingSearchIndex - 1; i >= 0; i--) {
          if (conformedValue[i] === targetChar || i === 0) {
            return i;
          }
        }
      } else {
        for (let i = startingSearchIndex; i >= 0; i--) {
          if (placeholder[i - 1] === this._placeholderChar || i === 0) {
            return i;
          }
        }
      }
    }
  }

}
