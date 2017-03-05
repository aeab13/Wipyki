import { WipykiWebPage } from './app.po';

describe('wipyki-web App', function() {
  let page: WipykiWebPage;

  beforeEach(() => {
    page = new WipykiWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
