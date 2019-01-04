import { MultiselectRoutingModule } from './multiselect-routing.module';

describe('MultiselectRoutingModule', () => {
  let multiselectRoutingModule: MultiselectRoutingModule;

  beforeEach(() => {
    multiselectRoutingModule = new MultiselectRoutingModule();
  });

  it('should create an instance', () => {
    expect(multiselectRoutingModule).toBeTruthy();
  });
});
