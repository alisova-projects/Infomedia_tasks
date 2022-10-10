import { BasePage } from './base.page';
import { expect, Locator, Page } from '@playwright/test';

export class ArticlePage extends BasePage {
    protected readonly page: Page;
    readonly getArticleWikiLogo: Locator;
    readonly getNavigation: Locator;
    readonly getMainMenu: Locator;
    readonly getArticleHeading: Locator;
    readonly getArticleTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.getArticleWikiLogo = page.locator('#p-logo');
        this.getNavigation = page.locator('#p-navigation');
        this.getMainMenu = page.locator('#p-navigation div ul li');
        this.getArticleTitle = page.locator('.mw-page-title-main');
    }

    async checkArticlePageIsLoaded() {
        await this.page.waitForLoadState('networkidle');
        await expect(this.getArticleWikiLogo).toBeVisible();
        await expect(this.getNavigation).toHaveAttribute('role', 'navigation')

        const menuOptions: any = await this.getMainMenu.allTextContents();
        console.log(menuOptions);

        await expect(menuOptions).toHaveText([
            `Main page`,
            `Contents`,
            `Current events`,
            `Random article`,
            `About Wikipedia`,
            `Contact us`,
            `Donate`
        ]);
    }

    async checkArticleTitle() {
        await expect(this.getArticleTitle).toHaveText('Book');
    }
}