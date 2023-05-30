/* Loading of Main Components */
const {Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const service = new chrome.ServiceBuilder(chromedriver.path).build();
const assert = require("assert");

describe("JessicaRoyce_Properties_Test_3", function(){
	it("Verify_Sorting_Property_Addresses_from_A_to_Z", async function(){
		let driver;
		try{
			driver = await new Builder().forBrowser("chrome").build();

			/*Open the chrome browser,resize window and click on the drop down to Select the option 'A-Z' */
			await driver.get("https://qaexam.forge99.com/properties");
			await driver.manage().window().setRect({ width: 1024, height: 720 });
			await driver.findElement(By.xpath("//div[@id=\'post-132\']/h1")).click();
			await driver.findElement(By.xpath("//option[. = 'A-Z']")).click();
			
			/*Find all spans with a class="prop-title" and a child element <a> */
			const rawElements = await driver.findElements(By.css('span.prop-title a'));

			/*Store the addresses to addressListDisplayed */
			const addressListDisplayed = [];
			for(const rawElement of rawElements){
				const textContent = await rawElement.getText();
				if(textContent !== ''){
					addressListDisplayed.push(textContent);
				}
			}
			
			/*Generate a new address list that is properly sorted alphabetically */
			addressListCorrect = addressListDisplayed.sort();
	
			/*Assert if the currently displayed list of addresses match the correct array.
			Turn each into a string to easily check*/
			let isAlphabetical;
			if(addressListCorrect.toString() === addressListDisplayed.toString()){
				isAlphabetical = true;
			}else{
				isAlphabetical = false;
			}

			assert.equal(isAlphabetical, true);
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
