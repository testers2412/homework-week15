$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("womencategorypagetest.feature");
formatter.feature({
  "line": 1,
  "name": "I should verify women category page functionality",
  "description": "",
  "id": "i-should-verify-women-category-page-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "verify I Should Add Product To The Cart Successfully",
  "description": "",
  "id": "i-should-verify-women-category-page-functionality;verify-i-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on women category",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the product \"\u003cProduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I change quantity \"\u003cQty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select the size \"\u003cSize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select the colour\"\u003cColour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify the product added message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I close the popup",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "i-should-verify-women-category-page-functionality;verify-i-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "Product",
        "Qty",
        "Size",
        "Colour"
      ],
      "line": 18,
      "id": "i-should-verify-women-category-page-functionality;verify-i-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 19,
      "id": "i-should-verify-women-category-page-functionality;verify-i-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 20,
      "id": "i-should-verify-women-category-page-functionality;verify-i-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 21,
      "id": "i-should-verify-women-category-page-functionality;verify-i-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress",
        "2",
        "M",
        "Blue"
      ],
      "line": 22,
      "id": "i-should-verify-women-category-page-functionality;verify-i-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5940224800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "verify I Should Add Product To The Cart Successfully",
  "description": "",
  "id": "i-should-verify-women-category-page-functionality;verify-i-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on women category",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select the size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select the colour\"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify the product added message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryStep.iClickOnWomenCategory()"
});
formatter.result({
  "duration": 2451266700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 24
    }
  ],
  "location": "WomenCategoryStep.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 1396340500,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#stale_element_reference\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-AV86AHVK\u0027, ip: \u0027172.17.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [13e0bfd29ed33bb7ddba60258288b4af, getElementAttribute {id\u003de49888e2-7af8-47ac-b6e2-ed1be57b7f73, name\u003dtitle}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\patel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52498}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52498/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (13e0bfd29ed33bb7ddba60258288b4af)] -\u003e xpath: //ul[@class\u003d\u0027product_list grid row\u0027]//li//div//div//div//a//img]\nSession ID: 13e0bfd29ed33bb7ddba60258288b4af\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getAttribute(RemoteWebElement.java:152)\r\n\tat com.automationpractice.pages.ProductPage.selectProduct(ProductPage.java:43)\r\n\tat com.automationpractice.steps.WomenCategoryStep.iClickOnTheProduct(WomenCategoryStep.java:45)\r\n\tat ✽.When I click on the product \"Blouse\"(womencategorypagetest.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategoryStep.iChangeQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 19
    }
  ],
  "location": "WomenCategoryStep.iSelectTheSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 20
    }
  ],
  "location": "WomenCategoryStep.iSelectTheColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryStep.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 36
    }
  ],
  "location": "WomenCategoryStep.iVerifyTheProductAddedMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryStep.iCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 965155800,
  "status": "passed"
});
formatter.before({
  "duration": 5113053900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verify I Should Add Product To The Cart Successfully",
  "description": "",
  "id": "i-should-verify-women-category-page-functionality;verify-i-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on women category",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I change quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select the size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select the colour\"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify the product added message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryStep.iClickOnWomenCategory()"
});
formatter.result({
  "duration": 2823705100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 24
    }
  ],
  "location": "WomenCategoryStep.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 1156982200,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#stale_element_reference\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-AV86AHVK\u0027, ip: \u0027172.17.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6201068118390dfafb92f538e1add9d0, getElementAttribute {id\u003d8f0bc5b5-ddb9-47ff-ab48-08abf438e5fa, name\u003dtitle}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\patel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52531}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52531/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (6201068118390dfafb92f538e1add9d0)] -\u003e xpath: //ul[@class\u003d\u0027product_list grid row\u0027]//li//div//div//div//a//img]\nSession ID: 6201068118390dfafb92f538e1add9d0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getAttribute(RemoteWebElement.java:152)\r\n\tat com.automationpractice.pages.ProductPage.selectProduct(ProductPage.java:43)\r\n\tat com.automationpractice.steps.WomenCategoryStep.iClickOnTheProduct(WomenCategoryStep.java:45)\r\n\tat ✽.When I click on the product \"Printed Dress\"(womencategorypagetest.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "WomenCategoryStep.iChangeQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 19
    }
  ],
  "location": "WomenCategoryStep.iSelectTheSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 20
    }
  ],
  "location": "WomenCategoryStep.iSelectTheColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryStep.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 36
    }
  ],
  "location": "WomenCategoryStep.iVerifyTheProductAddedMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryStep.iCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1329368800,
  "status": "passed"
});
formatter.before({
  "duration": 4751400100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify I Should Add Product To The Cart Successfully",
  "description": "",
  "id": "i-should-verify-women-category-page-functionality;verify-i-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on women category",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I change quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select the size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select the colour\"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify the product added message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryStep.iClickOnWomenCategory()"
});
formatter.result({
  "duration": 2341768700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 24
    }
  ],
  "location": "WomenCategoryStep.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 1351336500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "WomenCategoryStep.iChangeQuantity(String)"
});
formatter.result({
  "duration": 106763300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 19
    }
  ],
  "location": "WomenCategoryStep.iSelectTheSize(String)"
});
formatter.result({
  "duration": 61036400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 20
    }
  ],
  "location": "WomenCategoryStep.iSelectTheColour(String)"
});
formatter.result({
  "duration": 142116700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryStep.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 1096038500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 36
    }
  ],
  "location": "WomenCategoryStep.iVerifyTheProductAddedMessage(String)"
});
formatter.result({
  "duration": 21101034800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryStep.iCloseThePopup()"
});
formatter.result({
  "duration": 55792100,
  "status": "passed"
});
formatter.after({
  "duration": 678958300,
  "status": "passed"
});
formatter.before({
  "duration": 5179558100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify I Should Add Product To The Cart Successfully",
  "description": "",
  "id": "i-should-verify-women-category-page-functionality;verify-i-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on women category",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the product \"Printed Summer Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I change quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select the size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select the colour\"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify the product added message \"Product successfully added to your shopping cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryStep.iClickOnWomenCategory()"
});
formatter.result({
  "duration": 2364506500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress",
      "offset": 24
    }
  ],
  "location": "WomenCategoryStep.iClickOnTheProduct(String)"
});
formatter.result({
  "duration": 1906525400,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#stale_element_reference\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-AV86AHVK\u0027, ip: \u0027172.17.192.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [7aace274f5e4817e8cb5019beedcbc52, getElementAttribute {id\u003d2ac4d3b6-7a31-45a4-91cc-3e6ab5c16d5e, name\u003dtitle}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\patel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52607}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52607/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (7aace274f5e4817e8cb5019beedcbc52)] -\u003e xpath: //ul[@class\u003d\u0027product_list grid row\u0027]//li//div//div//div//a//img]\nSession ID: 7aace274f5e4817e8cb5019beedcbc52\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getAttribute(RemoteWebElement.java:152)\r\n\tat com.automationpractice.pages.ProductPage.selectProduct(ProductPage.java:43)\r\n\tat com.automationpractice.steps.WomenCategoryStep.iClickOnTheProduct(WomenCategoryStep.java:45)\r\n\tat ✽.When I click on the product \"Printed Summer Dress\"(womencategorypagetest.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "WomenCategoryStep.iChangeQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 19
    }
  ],
  "location": "WomenCategoryStep.iSelectTheSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 20
    }
  ],
  "location": "WomenCategoryStep.iSelectTheColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryStep.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 36
    }
  ],
  "location": "WomenCategoryStep.iVerifyTheProductAddedMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryStep.iCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1015897200,
  "status": "passed"
});
});