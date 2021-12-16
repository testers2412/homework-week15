package com.automationpractice.pages;


import com.automationpractice.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());
    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath="//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[1]")
    WebElement womenLink;
    @FindBy(xpath="")
    WebElement dressesLink;
    @FindBy(xpath="")
    WebElement tShirtLink;
    @FindBy(xpath="//a[contains(text(),'Sign in')]")
    WebElement signInLink;
    @FindBy(xpath="")
    WebElement logoLink;
    public void clickOnSignIn(){
        log.info("Clicking on SignIn" + signInLink.toString());
        pmClickOnElement(signInLink);
    }
    public void clickOnWomenTab(){
        log.info("Clicking on WOMEN tab" + womenLink.toString());
        pmClickOnElement(womenLink);
        pmwaitWithThreadSleep(20);
    }
}
