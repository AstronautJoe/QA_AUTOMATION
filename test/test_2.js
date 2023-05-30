/* Loading of Main Components */
const {Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const service = new chrome.ServiceBuilder(chromedriver.path).build();
const assert = require("assert");

describe("JessicaRoyce_Properties_Test_2", function(){
	it("Verify_Sorting_Properties_By_Least_Expensive_To_Most", async function(){
		let driver;
		try{
			driver = await new Builder().forBrowser("chrome").build();
			
			/*Open the chrome browser,resize window and click on the Sort by feature and click on Price Descending */
			await driver.get("https://qaexam.forge99.com/properties");
			await driver.manage().window().setRect({ width: 1024, height: 720 });
			await driver.findElement(By.xpath("//div[@id=\'post-132\']/h1")).click();
			await driver.findElement(By.xpath("//option[. = 'Price Ascending']")).click();
	
			/*Grabbing of Prices, removing any non numeric characters and storing them in priceList array*/
			const rawElements = await driver.findElements(By.css('p.list-price span'));
			const priceList = [];
			for(const rawElement of rawElements){
				const textContent = await rawElement.getText();
				if(textContent !== ''){
					textClean = parseFloat(textContent.replace(/\D/g, ''));
					priceList.push(textClean);
				}
			}
	
			/*By default it's a pass, until it sees something wrong */
			let orderCheck = "Pass!"; 
			/*Going through price list to check if they are in ascending order */
			for(let i = 0; i < priceList.length - 1; i++){
				if(priceList[i] > priceList[i + 1]){
					orderCheck = "Fail!";/*Breaks the loop once it finds an invalid comparison */
					break;
				}
			}
			/*Assert orderCheck to be a pass */
			assert.strictEqual(orderCheck, "Pass!");
		}catch(error){
			console.error('Error occured!:', error);
			throw error; // Rethrow the error to fail the test
		}finally{
			if(driver){
				await driver.quit();
			}
		}
		
	});

});