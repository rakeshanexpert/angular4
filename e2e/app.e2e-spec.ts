import { AngtestonePage } from './app.po';

describe('angtestone App', () => {
  let page: AngtestonePage;

  beforeEach(() => {
    page = new AngtestonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
