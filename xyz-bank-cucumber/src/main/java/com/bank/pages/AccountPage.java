package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Deposit']")
    WebElement depositTab;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='amount']")
    WebElement amountField;

    @CacheLookup
    @FindBy(xpath = "//button[@type='submit']")
    WebElement depositButton;

    @CacheLookup
    @FindBy(xpath = "//span[contains(normalize-space(),'Deposit Successful')]")
    WebElement depositMessage;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Withdrawl']")
    WebElement withdrawlTab;

    @CacheLookup
    @FindBy(xpath = "(//input[@placeholder='amount'])[1]")
    WebElement withdrawlAmountField;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Withdraw']")
    WebElement withdrawlButton;

    @CacheLookup
    @FindBy(xpath = "//span[contains(normalize-space(),'Transaction successful')]")
    WebElement withdrawlMessage;

    public AccountPage() {

        PageFactory.initElements(driver, this);
    }

    public void clickOnDepositTab() {

        pmClickOnElement(depositTab);
        log.info("Clicking on Deposit Tab : " + depositTab.toString());
    }

    public void enterAmount(String amount) {

        pmSendTextToElement(amountField, amount);
        log.info("Entering deposit Amount : " + amountField.toString());
    }

    public void clickOnDepositButton() {

        pmClickOnElement(depositButton);
        log.info("Clicking on Deposit Button : " + depositButton.toString());
    }

    public void verifyDepositSuccessFullMessage() {

        String expected = "Deposit Successful".trim();
        String actual = pmGetTextFromElement(depositMessage);
        Assert.assertEquals("wrong message", expected, actual);
        log.info("Verifying successful deposit message : " + depositMessage.toString());

    }

    public void clickOnWithdrawlTab() {

        pmClickOnElement(withdrawlTab);
        log.info("Click on withdrawl tab : " + withdrawlTab.toString());

    }

    public void enterWithdrawlAmount(String amount) {

        pmSendTextToElement(withdrawlAmountField, amount);
        log.info("Enter withdrawl amount : " + withdrawlAmountField.toString());

    }

    public void clickOnWithdrawlButton() {

        pmClickOnElement(withdrawlButton);
        log.info("Click on withdrawl button : " + withdrawlButton.toString());
    }

    public void verifyTransactionSuccessfulMessage() {

        String expected = "Transaction successful";
        String actual = pmGetTextFromElement(withdrawlMessage);

        Assert.assertEquals("wrong withdrawal message", expected, actual);
        log.info("Verify Transaction successful message : "+withdrawlMessage.toString());
    }


}
