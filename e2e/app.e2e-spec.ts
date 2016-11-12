import { NgFirebaseViewPage } from './app.po';

describe('ng-firebase-view App', function() {
  let page: NgFirebaseViewPage;

  beforeEach(() => {
    page = new NgFirebaseViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
