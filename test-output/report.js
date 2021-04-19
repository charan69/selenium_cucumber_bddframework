$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Customers.feature");
formatter.feature({
  "line": 1,
  "name": "Customers",
  "description": "",
  "id": "customers",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2904591400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are the common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on customer Menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on Customers Item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 361527400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin/",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 7008792000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 294945300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 4871447800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 41770300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_customer_Menu()"
});
formatter.result({
  "duration": 35128365200,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //a[@href\u003d\u0027#\u0027]//span[contains(text(),\u0027Customers\u0027)] (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat utilities.WaitHelper.waitforElementTobeClickable(WaitHelper.java:24)\r\n\tat pageObjects.AddCustomerPage.clickOnCustomersMenu(AddCustomerPage.java:61)\r\n\tat stepDefinitions.Steps.user_click_on_customer_Menu(Steps.java:120)\r\n\tat ✽.When User click on customer Menu(./Features/Customers.feature:9)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@href\u003d\u0027#\u0027]//span[contains(text(),\u0027Customers\u0027)]\"}\n  (Session info: chrome\u003d89.0.4389.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-6EQ6A31H\u0027, ip: \u0027192.168.29.173\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.114, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\chara\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61395}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d919388c62094907e98ab8c0df44f565\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027#\u0027]//span[contains(text(),\u0027Customers\u0027)]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor8.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:641)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:638)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat utilities.WaitHelper.waitforElementTobeClickable(WaitHelper.java:24)\r\n\tat pageObjects.AddCustomerPage.clickOnCustomersMenu(AddCustomerPage.java:61)\r\n\tat stepDefinitions.Steps.user_click_on_customer_Menu(Steps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:62)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.click_on_Customers_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Add a New Customer",
  "description": "",
  "id": "customers;add-a-new-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Click on Add new button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User can View Add new Customer Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enter customer info",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user can view confirmation message \"The new customer has been added succesfully\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Add_new_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_can_View_Add_new_Customer_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_enter_customer_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The new customer has been added succesfully",
      "offset": 36
    }
  ],
  "location": "Steps.user_can_view_confirmation_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 1464372800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are the common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on customer Menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on Customers Item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 209100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin/",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 4590876200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 209671500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 7525659000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 10305000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_customer_Menu()"
});
formatter.result({
  "duration": 35438052900,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //a[@href\u003d\u0027#\u0027]//span[contains(text(),\u0027Customers\u0027)] (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat utilities.WaitHelper.waitforElementTobeClickable(WaitHelper.java:24)\r\n\tat pageObjects.AddCustomerPage.clickOnCustomersMenu(AddCustomerPage.java:61)\r\n\tat stepDefinitions.Steps.user_click_on_customer_Menu(Steps.java:120)\r\n\tat ✽.When User click on customer Menu(./Features/Customers.feature:9)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@href\u003d\u0027#\u0027]//span[contains(text(),\u0027Customers\u0027)]\"}\n  (Session info: chrome\u003d89.0.4389.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-6EQ6A31H\u0027, ip: \u0027192.168.29.173\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.114, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\chara\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61442}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a3828c8934b8a3c72d48ec009d2455d7\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027#\u0027]//span[contains(text(),\u0027Customers\u0027)]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor8.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:641)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:638)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat utilities.WaitHelper.waitforElementTobeClickable(WaitHelper.java:24)\r\n\tat pageObjects.AddCustomerPage.clickOnCustomersMenu(AddCustomerPage.java:61)\r\n\tat stepDefinitions.Steps.user_click_on_customer_Menu(Steps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:62)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.click_on_Customers_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Search user by Email id",
  "description": "",
  "id": "customers;search-user-by-email-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Enter customer EMail",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User should found Email in the Search table",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enter_customer_EMail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_should_found_Email_in_the_Search_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 1339151000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are the common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on customer Menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on Customers Item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 198000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin/",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 4968475800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 215605700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 6312973200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 6885900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_customer_Menu()"
});
formatter.result({
  "duration": 35518907700,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //a[@href\u003d\u0027#\u0027]//span[contains(text(),\u0027Customers\u0027)] (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat utilities.WaitHelper.waitforElementTobeClickable(WaitHelper.java:24)\r\n\tat pageObjects.AddCustomerPage.clickOnCustomersMenu(AddCustomerPage.java:61)\r\n\tat stepDefinitions.Steps.user_click_on_customer_Menu(Steps.java:120)\r\n\tat ✽.When User click on customer Menu(./Features/Customers.feature:9)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@href\u003d\u0027#\u0027]//span[contains(text(),\u0027Customers\u0027)]\"}\n  (Session info: chrome\u003d89.0.4389.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-6EQ6A31H\u0027, ip: \u0027192.168.29.173\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.114, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\chara\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61488}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 12cd3695e2ade4d8bb64f81753600e9b\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027#\u0027]//span[contains(text(),\u0027Customers\u0027)]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor8.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:641)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:638)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat utilities.WaitHelper.waitforElementTobeClickable(WaitHelper.java:24)\r\n\tat pageObjects.AddCustomerPage.clickOnCustomersMenu(AddCustomerPage.java:61)\r\n\tat stepDefinitions.Steps.user_click_on_customer_Menu(Steps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:62)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.click_on_Customers_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 32,
  "name": "Search user by First name",
  "description": "",
  "id": "customers;search-user-by-first-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "Enter customer Name",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User should found Name in the Search table",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enter_customer_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_should_found_Name_in_the_Search_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 1331472700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are the common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on customer Menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on Customers Item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 879400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin/",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 5435424000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 195589100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 3880787200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 16169400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_customer_Menu()"
});
formatter.result({
  "duration": 35045688500,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //a[@href\u003d\u0027#\u0027]//span[contains(text(),\u0027Customers\u0027)] (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat utilities.WaitHelper.waitforElementTobeClickable(WaitHelper.java:24)\r\n\tat pageObjects.AddCustomerPage.clickOnCustomersMenu(AddCustomerPage.java:61)\r\n\tat stepDefinitions.Steps.user_click_on_customer_Menu(Steps.java:120)\r\n\tat ✽.When User click on customer Menu(./Features/Customers.feature:9)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@href\u003d\u0027#\u0027]//span[contains(text(),\u0027Customers\u0027)]\"}\n  (Session info: chrome\u003d89.0.4389.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-6EQ6A31H\u0027, ip: \u0027192.168.29.173\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.114, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\chara\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61523}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 183f629872bda77052eeaad62ebf1ffb\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027#\u0027]//span[contains(text(),\u0027Customers\u0027)]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor8.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:641)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:638)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat utilities.WaitHelper.waitforElementTobeClickable(WaitHelper.java:24)\r\n\tat pageObjects.AddCustomerPage.clickOnCustomersMenu(AddCustomerPage.java:61)\r\n\tat stepDefinitions.Steps.user_click_on_customer_Menu(Steps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:62)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.click_on_Customers_Item()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 42,
  "name": "Search user by Last name",
  "description": "",
  "id": "customers;search-user-by-last-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "Enter customer last Name",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User should found last Name in the Search table",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enter_customer_last_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.user_should_found_last_Name_in_the_Search_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("./Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1308210600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Succesful login with valid credentials",
  "description": "",
  "id": "login;succesful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 281400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin/",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 3454081500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 242610100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 5046652700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 41976500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Log_out_link()"
});
formatter.result({
  "duration": 7364362400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 12886800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 729526200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Login Data Driven",
  "description": "",
  "id": "login;login-data-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login;login-data-driven;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 26,
      "id": "login;login-data-driven;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 27,
      "id": "login;login-data-driven;;2"
    },
    {
      "cells": [
        "admin1@yourstore.com",
        "budama"
      ],
      "line": 28,
      "id": "login;login-data-driven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1352282600,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Login Data Driven",
  "description": "",
  "id": "login;login-data-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 393200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin/",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 3731566400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 196003300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 4852190600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 30504000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Log_out_link()"
});
formatter.result({
  "duration": 7235450900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 24312500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 826087400,
  "status": "passed"
});
formatter.before({
  "duration": 1833333300,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Login Data Driven",
  "description": "",
  "id": "login;login-data-driven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Email as \"admin1@yourstore.com\" and Password as \"budama\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 180000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/admin/",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 4462096700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin1@yourstore.com",
      "offset": 22
    },
    {
      "val": "budama",
      "offset": 61
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 211061000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 851223400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 706793000,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinitions.Steps.page_Title_should_be(Steps.java:83)\r\n\tat ✽.Then Page Title should be \"Dashboard / nopCommerce administration\"(./Features/Login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_click_on_Log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});