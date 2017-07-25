import { QuoteGeneratorPage } from './app.po';

describe('quote-generator App', () => {
  let page: QuoteGeneratorPage;

  beforeEach(() => {
    page = new QuoteGeneratorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
