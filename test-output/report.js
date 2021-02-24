$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Customers.feature");
formatter.feature({
  "line": 1,
  "name": "Customers",
  "description": "",
  "id": "customers",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5506132300,
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
  "duration": 359840600,
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
  "duration": 4745337800,
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
  "duration": 298072600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 5255320500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 10208700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_customer_Menu()"
});
formatter.result({
  "duration": 7140127000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Customers_Item()"
});
formatter.result({
  "duration": 10630306000,
  "status": "passed"
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
  "duration": 7807207400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_View_Add_new_Customer_Page()"
});
formatter.result({
  "duration": 3019188900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enter_customer_info()"
});
formatter.result({
  "duration": 13251739100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_save_button()"
});
formatter.result({
  "duration": 11425799500,
  "status": "passed"
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
  "duration": 2183013800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 9214060800,
  "status": "passed"
});
formatter.before({
  "duration": 5704806700,
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
  "duration": 518000,
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
  "duration": 9207086500,
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
  "duration": 1031284800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 9500331900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 11880300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_customer_Menu()"
});
formatter.result({
  "duration": 5442781200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Customers_Item()"
});
formatter.result({
  "duration": 8463618100,
  "status": "passed"
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
  "duration": 554536100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "duration": 5087640900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_found_Email_in_the_Search_table()"
});
formatter.result({
  "duration": 80278000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 983215100,
  "status": "passed"
});
formatter.before({
  "duration": 3480185200,
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
  "duration": 830000,
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
  "duration": 4624971300,
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
  "duration": 236255400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 3729381800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 5055600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_customer_Menu()"
});
formatter.result({
  "duration": 7156919000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Customers_Item()"
});
formatter.result({
  "duration": 8869350400,
  "status": "passed"
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
  "duration": 71978879900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "duration": 5085684100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_found_Name_in_the_Search_table()"
});
formatter.result({
  "duration": 2369507200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 904038200,
  "status": "passed"
});
formatter.before({
  "duration": 3320334600,
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
  "duration": 488500,
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
  "duration": 4728342100,
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
  "duration": 311546500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 3787598500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 6635200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_customer_Menu()"
});
formatter.result({
  "duration": 5128032200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Customers_Item()"
});
formatter.result({
  "duration": 6278040300,
  "status": "passed"
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
  "duration": 16638077400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "duration": 5080118000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_found_last_Name_in_the_Search_table()"
});
formatter.result({
  "duration": 6089004700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 747319700,
  "status": "passed"
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
  "duration": 3240355900,
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
  "duration": 251100,
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
  "duration": 4501480400,
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
  "duration": 317421400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 3162617400,
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
  "duration": 34619900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Log_out_link()"
});
formatter.result({
  "duration": 7135149900,
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
  "duration": 11596200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 910730100,
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
  "duration": 3263482000,
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
  "duration": 305500,
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
  "duration": 5398463100,
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
  "duration": 238233800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 3837874000,
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
  "duration": 41770200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Log_out_link()"
});
formatter.result({
  "duration": 7149398800,
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
  "duration": 11442900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 949885700,
  "status": "passed"
});
formatter.before({
  "duration": 3390402600,
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
  "duration": 230000,
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
  "duration": 5936475800,
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
  "duration": 960177500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 1383000800,
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
  "duration": 3864777900,
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