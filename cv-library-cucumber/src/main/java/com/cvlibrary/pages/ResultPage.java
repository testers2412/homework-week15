package com.cvlibrary.pages;

import com.cvlibrary.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;


public class ResultPage extends Utility {
    private static final Logger log = LogManager.getLogger(ResultPage.class.getName());
    public ResultPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//div[@class='search-header__title']//h1")
    WebElement resultText;
    public void verifyTheResults(String expected){
        Reporter.log("Verify the results : "+ expected+"<br>");
        pmVerifyElements(resultText,expected,"result is not matching");
        log.info("Verify the results : " + resultText.toString());
    }

}
