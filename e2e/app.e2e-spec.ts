import { Ang2HickingPage } from './app.po';

describe('ang2-hicking App', () => {
  let page: Ang2HickingPage;

  beforeEach(() => {
    page = new Ang2HickingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
