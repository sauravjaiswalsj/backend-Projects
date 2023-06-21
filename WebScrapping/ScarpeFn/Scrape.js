const puppeteer = require('puppeteer');

const data = {
    list: []
};
async function main(skill, location) {
    //open browser
    // headless: true will open and run the scrapping in the backgroud instead
    const browser = await puppeteer.launch({ headless: false });
    //open new tab
    const page = await browser.newPage();

    const url = `https://in.indeed.com/jobs?q=${skill}&l=${location}`;

    console.log(skill, location);
    console.log(url);

    await page.goto(url);

    const jobData = await page.evaluate(async (data) => {
        const item = document.querySelectorAll('td.resultContent');
        item.forEach((item, index) => {
            const title = item.querySelector('h2.jobTitle>a')?.innerText;
            const link = item.querySelector('h2.jobTitle>a')?.href;
            //let salary = item.querySelector('h2.jobTitle>span').innerText;

            data.list.push({
                title,
                link,
            });
        });
    });
    //close browser
    await browser.close();
    return data;

};

module.exports = main;