import { expect, Locator, Page } from '@playwright/test';

export abstract class BasePage {
    protected readonly page: Page; 
    readonly getWikiLogo: Locator;
    readonly getWikiSlogan: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getWikiLogo = page.locator('span.central-textlogo__image');
        this.getWikiSlogan = page.locator('strong.localized-slogan');
    }

    async goto() {
        await this.page.goto('https://www.wikipedia.org/');
    }
    
    async checkLogo() {
        await expect(this.getWikiLogo).toBeVisible({visible: true});
    }
    
    async checkSlogan() {
        await expect(this.getWikiSlogan).toHaveText('The Free Encyclopedia')
    }

} 