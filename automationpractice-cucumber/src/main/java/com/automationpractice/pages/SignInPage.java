package com.automationpractice.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;



public class SignInPage extends HomePage {
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());
    public SignInPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//h1[contains(text(),'Authentication')]")
    WebElement authenticationText;
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailFieldLink;
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement passwordFieldLink;
    @FindBy(xpath = "//button[@id='SubmitLogin']")
    WebElement signInTab;
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement emailCreateAccLink;
    @FindBy(xpath = "//button[@id='SubmitCreate']")
    WebElement createAccountLink;
    @FindBy(xpath = "//div[@class='alert alert-danger']//ol//li")
    WebElement errorMessageLink;
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement signOutLink;

    public void verifyAuthMessage(String eMessage) {
        log.info("Verifying the message" + authenticationText.toString());
        pmVerifyElements(authenticationText, eMessage, "Page is not displayed correctly");
    }

    public void enterEmail(String emailAddress) {
        log.info("Entering the email : " + emailCreateAccLink.toString() );
        pmSendTextToElement(emailCreateAccLink, emailAddress);
    }

    public void clickOnCreateAcc() {
        log.info("Clicking on create account" + createAccountLink.toString() );
        pmClickOnElement(createAccountLink);
    }

    public void enterUsername(String username) {
        log.info("Entering username" + emailFieldLink.toString() );
        pmSendTextToElement(emailFieldLink, username);
    }

    public void enterPassword(String password) {
        log.info("Entering the password " + passwordFieldLink.toString() );
        pmSendTextToElement(passwordFieldLink, password);
    }

    public void clickOnSigninButton() {
        log.info("Clicking on Signin button : " + signInTab.toString() );
        pmClickOnElement(signInTab);
    }

    public void verifyErrorMessage(String eMessage) {
        pmVerifyElements(errorMessageLink,eMessage , "Message is not displaed correctly");
        log.info("Verifing the error message : " + errorMessageLink.toString() );

    }

    public void loginToApplication(String username, String password) {
        enterUsername(username);
        enterPassword(password);
        clickOnSigninButton();
        //verifyErrorMessage(errorMessage);
    }
    public void verifySignOutLink(){
        log.info("Verifying Signout link : " + signOutLink.toString() );
        pmVerifyElements(signOutLink, "Sign out", "SignOut Link is not displayed ");
    }
    public void clickOnSignOut(){
        log.info("Clicking on SignOut : " + signOutLink.toString() );
        pmClickOnElement(signOutLink);
    }
    public void verifySignInLink(){
        log.info("Verifying SignIn link : " + signInTab.toString() );
        pmVerifyElements(signInTab, "Sign in", "SignOut Link is not displayed ");
    }

}