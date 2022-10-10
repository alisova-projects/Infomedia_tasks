import { expect, Locator, Page } from '@playwright/test';
import { ArticlePage } from '../../article.page';
import { LanguageToCheck } from '../../../../fixtures/web/testData';

export class SearchComponent {
    protected readonly page: Page;     
    readonly getSearchLanguage: Locator;
    readonly getLanguageLabel: Locator;
    readonly checkEnglishLanguageOption: Locator;
    readonly getSearchInput: Locator;
    readonly getSubmitBtn: Locator;


    constructor(page: Page) {
        this.page = page;    
        this.getSearchLanguage = page.locator('#searchLanguage');
        this.getLanguageLabel = page.locator('#jsLangLabel');
        this.checkEnglishLanguageOption = page.locator('option[value="en"]');
        this.getSearchInput = page.locator('#searchInput');
        this.getSubmitBtn = page.locator('[type="submit"]')
    }

    async checkSearchInput() {
        await expect(this.getSearchInput).toBeVisible();
    }
// 
    async chooseSearchLanguage(language: string) {
        await expect(this.getSearchLanguage).toBeVisible();
        await this.getSearchLanguage.click();
        await this.getSearchLanguage.type(language);
        await this.getSearchLanguage.press('Enter');
    }

    async checkChosenLanguage(languageCode: LanguageToCheck) {        
        await expect(this.getLanguageLabel).toHaveText(languageCode);
        await expect(this.checkEnglishLanguageOption).toHaveAttribute('value', languageCode)
    }

    async fillSearchInput(value: string) {
        await expect(this.getSearchInput).toBeVisible();
        await this.getSearchInput.click();
        await this.getSearchInput.type(value);
    }

    async clickSearchBtn() {
        await this.getSubmitBtn.click();
        return new ArticlePage(this.page);
    }
}
