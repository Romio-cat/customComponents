import { MaskInputModule } from './mask-input.module';

describe('MaskInputModule', () => {
  let maskInputModule: MaskInputModule;

  beforeEach(() => {
    maskInputModule = new MaskInputModule();
  });

  it('should create an instance', () => {
    expect(maskInputModule).toBeTruthy();
  });
});
