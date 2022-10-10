import { BasePage } from '../base.page';
import { Page } from '@playwright/test';
import { SearchComponent } from './components/search.component';

export class MainPage extends BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    getSearchComponent() {
        return new SearchComponent(this.page);
    }
}