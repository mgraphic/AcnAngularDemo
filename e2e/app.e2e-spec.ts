import { AngularDemoAppPage } from './app.po';

describe('angular-demo-app App', () => {
  let page: AngularDemoAppPage;

  beforeEach(() => {
    page = new AngularDemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
