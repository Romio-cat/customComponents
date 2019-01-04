import { ProceduresRoutingModule } from './procedures-routing.module';

describe('ProceduresRoutingModule', () => {
  let proceduresRoutingModule: ProceduresRoutingModule;

  beforeEach(() => {
    proceduresRoutingModule = new ProceduresRoutingModule();
  });

  it('should create an instance', () => {
    expect(proceduresRoutingModule).toBeTruthy();
  });
});
