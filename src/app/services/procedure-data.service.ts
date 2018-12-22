import { Injectable } from '@angular/core';
import { Procedure } from '../procedure';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs/index';
import { procedures } from '../mock-procedures';

@Injectable()
export class ProcedureDataService {

  public getProcedures(): Observable<Procedure[]> {
    return of(procedures);
  }
}
