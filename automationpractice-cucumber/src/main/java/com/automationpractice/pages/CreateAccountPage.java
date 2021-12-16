package com.automationpractice.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class CreateAccountPage extends HomePage {
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());
    public CreateAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//input[@id='customer_firstname']")
    WebElement firstNameLink;
    @FindBy(xpath = "//input[@id='customer_lastname']")
    WebElement lastNameLink;
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement passwordLink;
    @FindBy(xpath = "//input[@id='address1']")
    WebElement addressLink;
    @FindBy(xpath = "//input[@id='city']")
    WebElement cityLink;
    @FindBy(xpath = "//select[@id='id_state']")
    WebElement stateLink;
    @FindBy(xpath = "//input[@id='postcode']")
    WebElement zipPostalLink;
    @FindBy(xpath = "//select[@id='id_country']")
    WebElement countryLink;
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement mobilePhoneLink;
    @FindBy(xpath = "//button[@id='submitAccount']")
    WebElement registerLink;
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement emailCreateAccLink;
    @FindBy(xpath = "//button[@id='SubmitCreate']")
    WebElement createAccountLink;
    @FindBy(xpath = "//h1[contains(text(),'My account')]")
    WebElement myAccountTextLink;

    public void fillMandatoryFields(String fName, String lName, String password,String addressL1,String city,String state, String pCode,String pNumber) {
        log.info("Entering firstname" + firstNameLink.toString());
        pmSendTextToElement(firstNameLink, fName);
        log.info("Entering lastname" + lastNameLink.toString());
        pmSendTextToElement(lastNameLink, lName);
        log.info("Entering password" + passwordLink.toString());
        pmSendTextToElement(passwordLink, password);
        log.info("Entering address" + addressLink.toString());
        pmSendTextToElement(addressLink, addressL1);
        log.info("Entering city" + cityLink.toString());
        pmSendTextToElement(cityLink, city);
        log.info("Selecting the state" + stateLink.toString());
        pmSelectByContainsTextFromDropDown(stateLink, state);
        log.info("Entering postalcode" + zipPostalLink.toString());
        pmSendTextToElement(zipPostalLink, pCode);
        log.info("Entering contact number" + mobilePhoneLink.toString());
        pmSendTextToElement(mobilePhoneLink, pNumber);
    }

    public void clickOnRegister() {
        log.info("Clicking on register link" + registerLink.toString());
        pmClickOnElement(registerLink);
    }
    public void verifyMyAccountText(String eMessage){
        log.info("Verifying the message" + myAccountTextLink.toString());
        pmVerifyElements(myAccountTextLink,eMessage, "Message is not displayed correctly" );
    }
}
