import { After, AfterAll, AfterStep, Before, BeforeAll, Status,BeforeStep } from '@cucumber/cucumber';
import {Page, Browser,BrowserContext,chromium} from '@playwright/test'
import {pageFixture} from './pageFixture'

let browser : Browser;
let page : Page;
let context: BrowserContext;

BeforeAll({timeout: 30 * 1000},async function () {
    browser = await chromium.launch({ headless: false });
})

BeforeStep(async function ({pickleStep}) {
    console.log("==========================================================="+pickleStep.text)
    
})

Before(async function () {
    context = await browser.newContext();
    page = await browser.newPage();
    // @ts-ignore
    pageFixture.page = page;
})

After(async function ({ pickle, result }) {
    // Screenshot only for failure
    if(result?.status == Status.FAILED){
        const image = await pageFixture.page.screenshot({path:`./test-result/screenshots/${pickle.name}.png`, type: "png"});
        await this.attach(image, "image/png");
    }

    // Screenshot after each scenario
    // const image = await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}.png`, type: "png" });
    // await this.attach(image, "image/png");

    await page.close();
    await context.close();
})

AfterAll(async function () {
    await browser.close();
});

// AfterStep(async function({pickle}){
//     // Screenshot after each step
//     const image = await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}.png`, type: "png" });
//     await this.attach(image, "image/png");
// })