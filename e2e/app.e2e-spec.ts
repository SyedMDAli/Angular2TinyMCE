import { TinyMCEPage } from './app.po';

describe('tiny-mce App', function() {
  let page: TinyMCEPage;

  beforeEach(() => {
    page = new TinyMCEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
