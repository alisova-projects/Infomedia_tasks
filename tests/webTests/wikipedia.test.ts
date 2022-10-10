import { test } from '@playwright/test';
import { MainPage } from '../../web/pages/main/main.page';
import { LanguageToCheck } from '../../fixtures/web/testData';

test('Get "Book" article in Wikipedia', async ({ page }) => {
    const main = new MainPage(page);
    await main.goto();
    await main.checkLogo();
    await main.checkSlogan();

    const search = main.getSearchComponent();
    await search.checkSearchInput();    
    await search.chooseSearchLanguage('English');
    await search.checkChosenLanguage(LanguageToCheck.En);
    await search.fillSearchInput('Book');
    await search.clickSearchBtn();
});