# QA_Automation

## Table of Contents
- [Prerequisites]
- [Execution]
- [Expected_Output]

## Prerequisites:

You will need:
1. Node.js
2. Node Package Manager (NPM)
3. ChromeDriver (local executable)
4. A working Chrome web browser

If you have any of the mentioned components installed, feel free to skip to the next steps.


### 1. Install Node.js and Node Package Manager (NPM)

Since this all will be run in Javascript we need to install Node Packager Manager (NPM) in our PC.
Even though the dependencies are already outlined in the package.json file in the root directory, we will need it run the commands to execute the tests.
Proceed to step 2 if you already have the above mentioned installed.

- 1.1 Goto https://nodejs.org and click on the download option on the right indicating 'Current' with the latest features.

- 1.2 Run the installer.

- 1.3 During the 'Custom Setup' section, by default all necessary features will be installed. So no need to touch any of the options and proceed to the next steps.

- 1.4 Once the installation is done, verify the installation by opening up a command terminal and enter in the following.

		node -v
		npm -v

If the terminal displays the version then congratulations! You successfully installed Node.js and NPM.


### 2. Install ChromeDriver locally
To ensure that Selenium Webdriver works correctly, we need to install the proper webdriver executable for the desired browser.
Since we will be using Chrome we are required to install Chrome WebDriver. 
Refer to this video if you have trouble following the steps: https://www.youtube.com/watch?v=dz59GsdvUF8

- 2.1 Goto https://chromedriver.chromium.org/downloads .

- 2.2 Download the chromedriver that works with your version of chrome. 

  - 2.2.1 You can check your version of chrome by clicking on the icon that looks like '3 vertical dots' in the top right corner of the browser'.

  - 2.2.2 Hover over 'Help' and an additional menu should pop up.

  - 2.2.3. Click on 'About Google Chrome' and download the one that corresponds to your version according to the chromium webpage.

- 2.3 Unzip the files and place it in any accessible folder then copy the path to the chromedriver.exe we will need it later. I made a folder called 'Webdrivers' in my C: Directory. The path looks like this 'C:\webdrivers'.

- 2.4 Type in the phrase "advanced system settings" in the Windows search bar located at the bottom left corner of your screen.

- 2.5 Under the 'Advanced Tab' click on 'Environment Variables'.

- 2.6 Under the 'System Variables'section scroll through the list and click on the variable named 'Path'.

- 2.7 Click on 'Edit'.

- 2.8 A new window will appear. Click on 'New'.

- 2.9 Paste or type in the path to the folder where you installed chromedriver.exe, for me its C:\webdrivers.

- Hit Ok->Ok->Ok on your way out and you're done.

  - 2.9.1 You can check if it's properly installed by opening any Command Prompt (CMD) and entering in:

		chromedriver -v.

If it displays the version number then congratulations you just installed ChromeDriver!

### 3. Installing packages and dependencies
As of today: 5/31/2023 PHT. All the libraries installed in this folder should be up to date and you won't need NPM to install these again in this folder.
So you can skip this one but just to be sure:
- 3.1 Open any Terminal. You can use Command Prompt (CMD).
- 3.2 Change directory to the root folder so if this was in your downloads you enter this command:
		
		cd C:\Users\David134\Downloads\QA_Automation'
		
- 3.3 Install the following components by entering this command

		npm install selenium-webdriver
		npm install chromedriver
		npm install mocha

## Execution:
### 1. Execute the test cases in one command
- 1.1 Open any terminal even a simple Command Prompt (CMD).

- 1.2 Change directory to the location of the folder. 

		cd C:\Users\David134\Downloads\QA_Automation

- 1.3 Enter the following command:

		npx mocha --no-timeouts
		
### 2. Read or understand the results

- Now Selenium Webdriver will run through the 5 tests one by one. And Mocha will help display the results in your terminal.
Usually the results are clean but on my end the website has some SSL Certificate issue.
It will first announce whatever I inserted in the 'Describe block'
like 'JessicaRoye_Properties_Test_1'.

Disregard the Certificate errors as they are the website's issues.

Then if there will be an error it will say error occured: Assertion Error.

Errors/Failed Tests will show in red. While passed test cases will have a tickmark.

At the end there will be a summary that says:

	2 passing
	3 failing

Then it will mention all the Failing tests.

So to summarize it:
JessicaRoyce_Properties_Test_1
Verify_Sorting_Properties_By_Most_Expensive_To_Least - FAIL

JessicaRoyce_Properties_Test_2
Verify_Sorting_Properties_By_Least_Expensive_To_Most - FAIL

JessicaRoyce_Properties_Test_3
Verify_Sorting_Property_Addresses_from_A_to_Z - PASS

JessicaRoyce_Properties_Test_4
Verify_Sorting_Property_Addresses_from_Z_to_A -PASS

JessicaRoyce_Properties_Test_5
Verify_Prop_Images_have_300px_width - FAIL


# Expected_Output:
You should receive something like this in your terminal:

	C:\Users\Dave134\Desktop\Downloads\QA_Automation>npx mocha --no-timeouts


  	JessicaRoyce_Properties_Test_1

	DevTools listening on ws://127.0.0.1:53652/devtools/browser/657b7c4e-fccf-4435-ac95-64a2ed6d5081
	[1440:16252:0531/042855.331:ERROR:cert_issuer_source_aia.cc(34)] Error parsing cert retrieved from AIA (as DER):
	ERROR: Couldn't read tbsCertificate as SEQUENCE
	ERROR: Failed parsing Certificate

	Error occured!: AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
	+ actual - expected

	+ 'Fail!'
	- 'Pass!'
	    at Context.<anonymous> (C:\Users\Dave134\Desktop\Downloads\QA_Automation\test\test_1.js:40:11)
	    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
	  generatedMessage: true,
	  code: 'ERR_ASSERTION',
	  actual: 'Fail!',
	  expected: 'Pass!',
	  operator: 'strictEqual'
	}
	    1) Verify_Sorting_Properties_By_Most_Expensive_To_Least

	  JessicaRoyce_Properties_Test_2

	DevTools listening on ws://127.0.0.1:53709/devtools/browser/903d11ea-f503-4cd5-8b3a-ae93b8eb6a3a
	[9984:8948:0531/042911.147:ERROR:cert_issuer_source_aia.cc(34)] Error parsing cert retrieved from AIA (as DER):
	ERROR: Couldn't read tbsCertificate as SEQUENCE
	ERROR: Failed parsing Certificate

	Error occured!: AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
	+ actual - expected

	+ 'Fail!'
	- 'Pass!'
	    at Context.<anonymous> (C:\Users\Dave134\Desktop\Downloads\QA_Automation\test\test_2.js:41:11)
	    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
	  generatedMessage: true,
	  code: 'ERR_ASSERTION',
	  actual: 'Fail!',
	  expected: 'Pass!',
	  operator: 'strictEqual'
	}
	    2) Verify_Sorting_Properties_By_Least_Expensive_To_Most

	  JessicaRoyce_Properties_Test_3

	DevTools listening on ws://127.0.0.1:53786/devtools/browser/07a05494-fb4c-4255-8759-d179f043d7bc
	[2468:15640:0531/042921.752:ERROR:cert_issuer_source_aia.cc(34)] Error parsing cert retrieved from AIA (as DER):
	ERROR: Couldn't read tbsCertificate as SEQUENCE
	ERROR: Failed parsing Certificate

	    √ Verify_Sorting_Property_Addresses_from_A_to_Z (10860ms)

	  JessicaRoyce_Properties_Test_4

	DevTools listening on ws://127.0.0.1:53861/devtools/browser/6d3a5e1f-7bed-4148-b07d-c68e1ea2fead
	[1708:17960:0531/042932.508:ERROR:cert_issuer_source_aia.cc(34)] Error parsing cert retrieved from AIA (as DER):
	ERROR: Couldn't read tbsCertificate as SEQUENCE
	ERROR: Failed parsing Certificate

	    √ Verify_Sorting_Property_Addresses_from_Z_to_A (10786ms)

	  JessicaRoyce_Properties_Test_5

	DevTools listening on ws://127.0.0.1:53937/devtools/browser/4acdd66f-7096-4f49-b07d-d467bd84680a
	[7940:19452:0531/042943.316:ERROR:cert_issuer_source_aia.cc(34)] Error parsing cert retrieved from AIA (as DER):
	ERROR: Couldn't read tbsCertificate as SEQUENCE
	ERROR: Failed parsing Certificate

	Error occured!: AssertionError [ERR_ASSERTION]: false == true
	    at Context.<anonymous> (C:\Users\Dave134\Desktop\Downloads\QA_Automation\test\test_5.js:33:11)
	    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
	  generatedMessage: true,
	  code: 'ERR_ASSERTION',
	  actual: false,
	  expected: true,
	  operator: '=='
	}
	    3) Verify_Prop_Images_have_300px_width


	  2 passing (58s)
	  3 failing

	  1) JessicaRoyce_Properties_Test_1
	       Verify_Sorting_Properties_By_Most_Expensive_To_Least:

	      AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
	+ actual - expected

	+ 'Fail!'
	- 'Pass!'
	      + expected - actual

	      -Fail!
	      +Pass!

	      at Context.<anonymous> (test\test_1.js:40:11)
	      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

	  2) JessicaRoyce_Properties_Test_2
	       Verify_Sorting_Properties_By_Least_Expensive_To_Most:

	      AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
	+ actual - expected

	+ 'Fail!'
	- 'Pass!'
	      + expected - actual

	      -Fail!
	      +Pass!

	      at Context.<anonymous> (test\test_2.js:41:11)
	      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

	  3) JessicaRoyce_Properties_Test_5
	       Verify_Prop_Images_have_300px_width:

	      AssertionError [ERR_ASSERTION]: false == true
	      + expected - actual

	      -false
	      +true

	      at Context.<anonymous> (test\test_5.js:33:11)
	      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
