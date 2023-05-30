/* Loading of Main Components */
const {Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const service = new chrome.ServiceBuilder(chromedriver.path).build();
const assert = require("assert");

describe("JessicaRoyce_Properties_Test_5", function(){
	it("Verify_Prop_Images_have_300px_width", async function(){
		let driver;
		try{
			driver = await new Builder().forBrowser("chrome").build();

			/*Open the chrome browser,resize window and wait for the page to fully load' */
			await driver.get("https://qaexam.forge99.com/properties");
			await driver.manage().window().setRect({ width: 1024, height: 720 });
			await driver.wait(() => driver.executeScript('return document.readyState === "complete";'));

			/*Look for the images with the mentioned xpath. Store in array*/
			let propImages = await driver.findElements(By.xpath("//div[@id=\'content-listings\']/ul[2]/li/div/a/img[contains(@class, 'main-img') and contains(@class, 'wp-post-image')]"));

			let widthValid = true;
			for(const propImage of propImages){
				const size = await propImage.getRect();
				const width = size.width;
				/*Once a property image is found out not having a width of 300, break the loop and fail the test*/
				if(width !== 300){
					widthValid = false;
					break;
				}
			}

			assert.equal(widthValid, true);
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