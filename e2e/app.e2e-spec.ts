import { TouchFusionPage } from './app.po';

describe('touch-fusion App', () => {
  let page: TouchFusionPage;

  beforeEach(() => {
    page = new TouchFusionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
