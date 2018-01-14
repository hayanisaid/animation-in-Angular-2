import { AnimationNgPage } from './app.po';

describe('animation-ng App', function() {
  let page: AnimationNgPage;

  beforeEach(() => {
    page = new AnimationNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
