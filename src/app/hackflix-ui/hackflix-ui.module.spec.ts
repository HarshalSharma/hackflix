import { HackflixUIModule } from './hackflix-ui.module';

describe('HackflixUIModule', () => {
  let hackflixUIModule: HackflixUIModule;

  beforeEach(() => {
    hackflixUIModule = new HackflixUIModule();
  });

  it('should create an instance', () => {
    expect(hackflixUIModule).toBeTruthy();
  });
});
