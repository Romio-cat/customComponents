import { ProceduresModule } from './procedures.module';

describe('ProceduresModule', () => {
  let proceduresModule: ProceduresModule;

  beforeEach(() => {
    proceduresModule = new ProceduresModule();
  });

  it('should create an instance', () => {
    expect(proceduresModule).toBeTruthy();
  });
});
