import { SliderRoutingModule } from './slider-routing.module';

describe('SliderRoutingModule', () => {
  let sliderRoutingModule: SliderRoutingModule;

  beforeEach(() => {
    sliderRoutingModule = new SliderRoutingModule();
  });

  it('should create an instance', () => {
    expect(sliderRoutingModule).toBeTruthy();
  });
});
