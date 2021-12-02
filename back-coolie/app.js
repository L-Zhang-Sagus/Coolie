const express = require("express");
const app = express();
const {Builder} = require('selenium-webdriver');


(async function myFunction() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://selenium.dev')
    //你的代码放在这个块中
    app.listen(3000,()=> {
        console.log("good")
    })
})();
