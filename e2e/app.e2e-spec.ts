import { PetiteCeline2Page } from './app.po';

describe('petite-celine2 App', () => {
  let page: PetiteCeline2Page;

  beforeEach(() => {
    page = new PetiteCeline2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
