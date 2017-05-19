import { TalkapiAngular2SamplePage } from './app.po';

describe('talkapi-angular2-sample App', function() {
  let page: TalkapiAngular2SamplePage;

  beforeEach(() => {
    page = new TalkapiAngular2SamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
