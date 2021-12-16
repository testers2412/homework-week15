$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search Test",
  "description": "\r\nI want to verify the job Search result using different data",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User should be able to search jobs successfully",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-search-jobs-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter \"\u003cJob Title\u003e\" job title field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter\"\u003cLocation\u003e\" in the location field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select\"\u003cDistance\u003e\" in the distance field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on the more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter\"\u003cMinimum Salary\u003e\" in the minimum salary field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter\"\u003cMaximum Salary\u003e\" in the maximum salary field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select\"\u003cSalary Type\u003e\" salary type",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select\"\u003cJob Type\u003e\" job type",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on the find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the result \"\u003cResult\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am able to search jobs successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-search-jobs-successfully;",
  "rows": [
    {
      "cells": [
        "Job Title",
        "Location",
        "Distance",
        "Minimum Salary",
        "Maximum Salary",
        "Salary Type",
        "Job Type",
        "Result"
      ],
      "line": 21,
      "id": "job-search-test;user-should-be-able-to-search-jobs-successfully;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 22,
      "id": "job-search-test;user-should-be-able-to-search-jobs-successfully;;2"
    },
    {
      "cells": [
        "Tester",
        "Edgware",
        "up to 1 mile",
        "2000",
        "5000",
        "Per month",
        "Contract",
        "Contract Tester jobs in Edgware"
      ],
      "line": 23,
      "id": "job-search-test;user-should-be-able-to-search-jobs-successfully;;3"
    },
    {
      "cells": [
        "Tester",
        "Wembley",
        "up to 10 miles",
        "100",
        "550",
        "Per day",
        "Part Time",
        "Part Time Tester jobs in Wembley"
      ],
      "line": 24,
      "id": "job-search-test;user-should-be-able-to-search-jobs-successfully;;4"
    },
    {
      "cells": [
        "Tester",
        "Stanmore",
        "up to 2 miles",
        "35",
        "200",
        "Per hour",
        "Temporary",
        "Temporary Tester jobs in Stanmore"
      ],
      "line": 25,
      "id": "job-search-test;user-should-be-able-to-search-jobs-successfully;;5"
    },
    {
      "cells": [
        "Tester",
        "Pinner",
        "up to 25 miles",
        "25000",
        "100000",
        "Per annum",
        "Apprenticeship",
        "Apprenticeship Tester jobs in Pinner"
      ],
      "line": 26,
      "id": "job-search-test;user-should-be-able-to-search-jobs-successfully;;6"
    },
    {
      "cells": [
        "Tester",
        "Ruislip",
        "up to 7 miles",
        "55000",
        "65000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Ruislip"
      ],
      "line": 27,
      "id": "job-search-test;user-should-be-able-to-search-jobs-successfully;;7"
    },
    {
      "cells": [
        "Tester",
        "Alperton",
        "up to 750 miles",
        "27000",
        "70000",
        "Per annum",
        "Temporary",
        "Temporary Tester jobs in Alperton"
      ],
      "line": 28,
      "id": "job-search-test;user-should-be-able-to-search-jobs-successfully;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7438775100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to search jobs successfully",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-search-jobs-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter \"Tester\" job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter\"Harrow\" in the location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select\"up to 5 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on the more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter\"30000\" in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter\"500000\" in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select\"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select\"Permanent\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on the find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the result \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am able to search jobs successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iEnterJobTitleField(String)"
});
formatter.result({
  "duration": 329755400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheLocationField(String)"
});
formatter.result({
  "duration": 107908000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 362893200,
  "status": "passed"
});
formatter.match({
  "location": "jobSearchSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 129041400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 190262400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 115675800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 200821300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 180501000,
  "status": "passed"
});
formatter.match({
  "location": "jobSearchSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 1238114900,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"submit\" id\u003d\"hp-search-btn\" value\u003d\"Find Jobs\" data-gtm-key\u003d\"JobSearch\" data-gtm-label\u003d\"Homepage\" class\u003d\"hps-transition\"\u003e is not clickable at point (1181, 381). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"min-height: 228px; width: 100%; left: 0px; position: fixed; display: block; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; bottom: 0px; height: 343px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-AV86AHVK\u0027, ip: \u0027172.17.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [542e9e8a12b19894fdc822a8bea90a6b, clickElement {id\u003df6591d85-b8a8-47d3-8016-ba37952534a9}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\patel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63796}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63796/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (542e9e8a12b19894fdc822a8bea90a6b)] -\u003e id: hp-search-btn]\nSession ID: 542e9e8a12b19894fdc822a8bea90a6b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat com.cvlibrary.pages.HomePage.clickOnFindJobsButton(HomePage.java:117)\r\n\tat com.cvlibrary.cucumber.steps.jobSearchSteps.iClickOnTheFindJobsButton(jobSearchSteps.java:58)\r\n\tat ✽.And I click on the find jobs button(jobsearch.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 21
    }
  ],
  "location": "jobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "jobSearchSteps.iAmAbleToSearchJobsSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1112377700,
  "status": "passed"
});
formatter.before({
  "duration": 4915269400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should be able to search jobs successfully",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-search-jobs-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter \"Tester\" job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter\"Edgware\" in the location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select\"up to 1 mile\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on the more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter\"2000\" in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter\"5000\" in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select\"Per month\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select\"Contract\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on the find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the result \"Contract Tester jobs in Edgware\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am able to search jobs successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iEnterJobTitleField(String)"
});
formatter.result({
  "duration": 115355200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edgware",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheLocationField(String)"
});
formatter.result({
  "duration": 101234300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 1 mile",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 316089200,
  "status": "passed"
});
formatter.match({
  "location": "jobSearchSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 136368000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 168038300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 95483800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 169205500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 179453300,
  "status": "passed"
});
formatter.match({
  "location": "jobSearchSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 1106888700,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"submit\" id\u003d\"hp-search-btn\" value\u003d\"Find Jobs\" data-gtm-key\u003d\"JobSearch\" data-gtm-label\u003d\"Homepage\" class\u003d\"hps-transition\"\u003e is not clickable at point (1181, 381). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"min-height: 228px; width: 100%; left: 0px; position: fixed; display: block; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; bottom: 0px; height: 343px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-AV86AHVK\u0027, ip: \u0027172.17.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3e998f06845b49f2aab15c9a740f0b2e, clickElement {id\u003dafe4ac80-95c1-4c10-be02-95ddee1b39fc}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\patel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63847}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63847/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (3e998f06845b49f2aab15c9a740f0b2e)] -\u003e id: hp-search-btn]\nSession ID: 3e998f06845b49f2aab15c9a740f0b2e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat com.cvlibrary.pages.HomePage.clickOnFindJobsButton(HomePage.java:117)\r\n\tat com.cvlibrary.cucumber.steps.jobSearchSteps.iClickOnTheFindJobsButton(jobSearchSteps.java:58)\r\n\tat ✽.And I click on the find jobs button(jobsearch.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Tester jobs in Edgware",
      "offset": 21
    }
  ],
  "location": "jobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "jobSearchSteps.iAmAbleToSearchJobsSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1072787700,
  "status": "passed"
});
formatter.before({
  "duration": 5541636500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to search jobs successfully",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-search-jobs-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter \"Tester\" job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter\"Wembley\" in the location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select\"up to 10 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on the more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter\"100\" in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter\"550\" in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select\"Per day\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select\"Part Time\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on the find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the result \"Part Time Tester jobs in Wembley\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am able to search jobs successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iEnterJobTitleField(String)"
});
formatter.result({
  "duration": 122707900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wembley",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheLocationField(String)"
});
formatter.result({
  "duration": 109201500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 302128400,
  "status": "passed"
});
formatter.match({
  "location": "jobSearchSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 120395300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 160558600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "550",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 102274300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per day",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 155483400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Part Time",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 165625200,
  "status": "passed"
});
formatter.match({
  "location": "jobSearchSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 1165823800,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"submit\" id\u003d\"hp-search-btn\" value\u003d\"Find Jobs\" data-gtm-key\u003d\"JobSearch\" data-gtm-label\u003d\"Homepage\" class\u003d\"hps-transition\"\u003e is not clickable at point (1181, 381). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"min-height: 228px; width: 100%; left: 0px; position: fixed; display: block; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; bottom: 0px; height: 343px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-AV86AHVK\u0027, ip: \u0027172.17.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ea9eded0d33d2a7fc8fd091450653455, clickElement {id\u003df2e39327-e8e1-45d9-a326-dfb281512d74}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\patel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63892}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63892/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (ea9eded0d33d2a7fc8fd091450653455)] -\u003e id: hp-search-btn]\nSession ID: ea9eded0d33d2a7fc8fd091450653455\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat com.cvlibrary.pages.HomePage.clickOnFindJobsButton(HomePage.java:117)\r\n\tat com.cvlibrary.cucumber.steps.jobSearchSteps.iClickOnTheFindJobsButton(jobSearchSteps.java:58)\r\n\tat ✽.And I click on the find jobs button(jobsearch.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Part Time Tester jobs in Wembley",
      "offset": 21
    }
  ],
  "location": "jobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "jobSearchSteps.iAmAbleToSearchJobsSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1087672500,
  "status": "passed"
});
formatter.before({
  "duration": 5533629400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to search jobs successfully",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-search-jobs-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter \"Tester\" job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter\"Stanmore\" in the location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select\"up to 2 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on the more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter\"35\" in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter\"200\" in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select\"Per hour\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select\"Temporary\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on the find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the result \"Temporary Tester jobs in Stanmore\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am able to search jobs successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iEnterJobTitleField(String)"
});
formatter.result({
  "duration": 119197200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stanmore",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheLocationField(String)"
});
formatter.result({
  "duration": 127209900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 2 miles",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 347352000,
  "status": "passed"
});
formatter.match({
  "location": "jobSearchSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 114850000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 178590000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 114396200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per hour",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 172950500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 183934600,
  "status": "passed"
});
formatter.match({
  "location": "jobSearchSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 1111804900,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"submit\" id\u003d\"hp-search-btn\" value\u003d\"Find Jobs\" data-gtm-key\u003d\"JobSearch\" data-gtm-label\u003d\"Homepage\" class\u003d\"hps-transition\"\u003e is not clickable at point (1181, 381). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"min-height: 228px; width: 100%; left: 0px; position: fixed; display: block; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; bottom: 0px; height: 343px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-AV86AHVK\u0027, ip: \u0027172.17.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [01a3fc6ee84d1bf728dea4406a0cb29d, clickElement {id\u003d15a22db1-8844-44c7-951d-7dbdf051c656}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\patel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63936}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63936/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (01a3fc6ee84d1bf728dea4406a0cb29d)] -\u003e id: hp-search-btn]\nSession ID: 01a3fc6ee84d1bf728dea4406a0cb29d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat com.cvlibrary.pages.HomePage.clickOnFindJobsButton(HomePage.java:117)\r\n\tat com.cvlibrary.cucumber.steps.jobSearchSteps.iClickOnTheFindJobsButton(jobSearchSteps.java:58)\r\n\tat ✽.And I click on the find jobs button(jobsearch.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary Tester jobs in Stanmore",
      "offset": 21
    }
  ],
  "location": "jobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "jobSearchSteps.iAmAbleToSearchJobsSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1073651500,
  "status": "passed"
});
formatter.before({
  "duration": 5426443800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to search jobs successfully",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-search-jobs-successfully;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter \"Tester\" job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter\"Pinner\" in the location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select\"up to 25 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on the more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter\"25000\" in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter\"100000\" in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select\"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select\"Apprenticeship\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on the find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the result \"Apprenticeship Tester jobs in Pinner\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am able to search jobs successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iEnterJobTitleField(String)"
});
formatter.result({
  "duration": 104995600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pinner",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheLocationField(String)"
});
formatter.result({
  "duration": 99800200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 335501300,
  "status": "passed"
});
formatter.match({
  "location": "jobSearchSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 99164700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 182285600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100000",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 100111500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 143663500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apprenticeship",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 169761600,
  "status": "passed"
});
formatter.match({
  "location": "jobSearchSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 1154084500,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"submit\" id\u003d\"hp-search-btn\" value\u003d\"Find Jobs\" data-gtm-key\u003d\"JobSearch\" data-gtm-label\u003d\"Homepage\" class\u003d\"hps-transition\"\u003e is not clickable at point (1181, 381). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"min-height: 228px; width: 100%; left: 0px; position: fixed; display: block; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; bottom: 0px; height: 343px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-AV86AHVK\u0027, ip: \u0027172.17.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ff7557550fc647ae5aaf66a38e9dfe37, clickElement {id\u003dcc58a5ff-c6df-42d1-8cbf-7121fe4e363b}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\patel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63980}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63980/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (ff7557550fc647ae5aaf66a38e9dfe37)] -\u003e id: hp-search-btn]\nSession ID: ff7557550fc647ae5aaf66a38e9dfe37\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat com.cvlibrary.pages.HomePage.clickOnFindJobsButton(HomePage.java:117)\r\n\tat com.cvlibrary.cucumber.steps.jobSearchSteps.iClickOnTheFindJobsButton(jobSearchSteps.java:58)\r\n\tat ✽.And I click on the find jobs button(jobsearch.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apprenticeship Tester jobs in Pinner",
      "offset": 21
    }
  ],
  "location": "jobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "jobSearchSteps.iAmAbleToSearchJobsSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1084069500,
  "status": "passed"
});
formatter.before({
  "duration": 5467570300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should be able to search jobs successfully",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-search-jobs-successfully;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter \"Tester\" job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter\"Ruislip\" in the location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select\"up to 7 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on the more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter\"55000\" in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter\"65000\" in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select\"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select\"Permanent\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on the find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the result \"Permanent Tester jobs in Ruislip\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am able to search jobs successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iEnterJobTitleField(String)"
});
formatter.result({
  "duration": 106501800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ruislip",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheLocationField(String)"
});
formatter.result({
  "duration": 119702200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 7 miles",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 334126600,
  "status": "passed"
});
formatter.match({
  "location": "jobSearchSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 101837100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55000",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 157639300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "65000",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 98823200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 163045300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 163218700,
  "status": "passed"
});
formatter.match({
  "location": "jobSearchSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 1100348800,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"submit\" id\u003d\"hp-search-btn\" value\u003d\"Find Jobs\" data-gtm-key\u003d\"JobSearch\" data-gtm-label\u003d\"Homepage\" class\u003d\"hps-transition\"\u003e is not clickable at point (1181, 381). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"min-height: 228px; width: 100%; left: 0px; position: fixed; display: block; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; bottom: 0px; height: 343px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-AV86AHVK\u0027, ip: \u0027172.17.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d83aa5867af1f04adc0477d64692b6e1, clickElement {id\u003d1db0de49-1a00-452c-aaa2-d81af6a983d2}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\patel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64023}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64023/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (d83aa5867af1f04adc0477d64692b6e1)] -\u003e id: hp-search-btn]\nSession ID: d83aa5867af1f04adc0477d64692b6e1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat com.cvlibrary.pages.HomePage.clickOnFindJobsButton(HomePage.java:117)\r\n\tat com.cvlibrary.cucumber.steps.jobSearchSteps.iClickOnTheFindJobsButton(jobSearchSteps.java:58)\r\n\tat ✽.And I click on the find jobs button(jobsearch.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Ruislip",
      "offset": 21
    }
  ],
  "location": "jobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "jobSearchSteps.iAmAbleToSearchJobsSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1022217300,
  "status": "passed"
});
formatter.before({
  "duration": 5632649900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should be able to search jobs successfully",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-search-jobs-successfully;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter \"Tester\" job title field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter\"Alperton\" in the location field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select\"up to 750 miles\" in the distance field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on the more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter\"27000\" in the minimum salary field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter\"70000\" in the maximum salary field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select\"Per annum\" salary type",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select\"Temporary\" job type",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on the find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify the result \"Temporary Tester jobs in Alperton\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am able to search jobs successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iEnterJobTitleField(String)"
});
formatter.result({
  "duration": 104348900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alperton",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheLocationField(String)"
});
formatter.result({
  "duration": 137086800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 750 miles",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectInTheDistanceField(String)"
});
formatter.result({
  "duration": 331149600,
  "status": "passed"
});
formatter.match({
  "location": "jobSearchSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 91575700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "27000",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheMinimumSalaryField(String)"
});
formatter.result({
  "duration": 157397700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70000",
      "offset": 8
    }
  ],
  "location": "jobSearchSteps.iEnterInTheMaximumSalaryField(String)"
});
formatter.result({
  "duration": 100157600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 144714700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary",
      "offset": 9
    }
  ],
  "location": "jobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 180444600,
  "status": "passed"
});
formatter.match({
  "location": "jobSearchSteps.iClickOnTheFindJobsButton()"
});
formatter.result({
  "duration": 1102759800,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"submit\" id\u003d\"hp-search-btn\" value\u003d\"Find Jobs\" data-gtm-key\u003d\"JobSearch\" data-gtm-label\u003d\"Homepage\" class\u003d\"hps-transition\"\u003e is not clickable at point (1181, 381). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"min-height: 228px; width: 100%; left: 0px; position: fixed; display: block; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; bottom: 0px; height: 343px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-AV86AHVK\u0027, ip: \u0027172.17.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2d46db894d0223f77ca43b6db7d55812, clickElement {id\u003dae529ee6-2f79-4f68-9e0e-4ae4ebfd53ad}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\patel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64067}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64067/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (2d46db894d0223f77ca43b6db7d55812)] -\u003e id: hp-search-btn]\nSession ID: 2d46db894d0223f77ca43b6db7d55812\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat com.cvlibrary.pages.HomePage.clickOnFindJobsButton(HomePage.java:117)\r\n\tat com.cvlibrary.cucumber.steps.jobSearchSteps.iClickOnTheFindJobsButton(jobSearchSteps.java:58)\r\n\tat ✽.And I click on the find jobs button(jobsearch.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary Tester jobs in Alperton",
      "offset": 21
    }
  ],
  "location": "jobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "jobSearchSteps.iAmAbleToSearchJobsSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1053737100,
  "status": "passed"
});
});