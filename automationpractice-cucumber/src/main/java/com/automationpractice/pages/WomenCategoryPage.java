package com.automationpractice.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class WomenCategoryPage extends HomePage{
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());
    public WomenCategoryPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath="//h2[contains(text(),'Women')]")
    WebElement womenTitleTextLink;

    public void verifyWomenText(String eMessage){
        log.info("Verifying WOMEN text"+womenTitleTextLink.toString());

        pmVerifyElements(womenTitleTextLink, eMessage, "Page is not displayed correctly");
    }
}
