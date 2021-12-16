package com.cvlibrary.pages;

import com.cvlibrary.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());
    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='keywords']")
    WebElement jobTitleTab;
    @CacheLookup
    @FindBy(xpath = "//input[@id='location']")
    WebElement locationTab;
    @CacheLookup
    @FindBy(xpath = "//select[@id='distance']")
    WebElement distanceDropDown;
    @CacheLookup
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement moreSearchOptionsLink;
    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymin']")
    WebElement salaryMinTab;
    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymax']")
    WebElement salaryMaxTab;
    @CacheLookup
    @FindBy(xpath = "//select[@id='salarytype']")
    WebElement salaryTypeDropDown;
    @CacheLookup
    @FindBy(xpath = "//select[@id='tempperm']")
    WebElement jobTypeDropDown;
    @CacheLookup
    @FindBy(id = "hp-search-btn")
    WebElement findJobBtn;
    @CacheLookup
    @FindBy(xpath = "//span//div//span[normalize-space()='Accept All']")
    WebElement acceptCookies;
    @CacheLookup
    @FindBy(id = "gdpr-consent-notice")
    WebElement iframe;


   /* public void setAcceptCookies() {
        pmSwitchToIframe(iframe);
        pmClickOnElement(acceptCookies);
        driver.switchTo().defaultContent();
        log.info("Accept Cookies : " + acceptCookies.toString());
    }*/

    public void enterJobTitle(String jobTitle) {

        pmSendTextToElement(jobTitleTab, jobTitle);
        log.info("Enter job title : " + jobTitle);

    }

    public void enterLocation(String location) {

        pmSendTextToElement(locationTab, location);
        log.info("Enter location : " + location);

    }

    public void selectDistance(String distance){

        pmSelectByContainsTextFromDropDown(distanceDropDown, distance);
        log.info("Select distance : " + distance);

    }

    public void clickOnMoreSearchOptionLink() {

        pmClickOnElement(moreSearchOptionsLink);
        log.info("Click on more search : " + moreSearchOptionsLink.toString());
    }

    public void enterMinSalary(String minSalary) {

        pmSendTextToElement(salaryMinTab,minSalary);
        log.info("Enter minimum salary : " + salaryMinTab.toString());

    }

    public void enterMaxSalary(String maxSalary) {

        pmSendTextToElement(salaryMaxTab,maxSalary);
        log.info("Enter maximum salary : " + maxSalary);

    }

    public void selectSalaryType(String sType) {

        pmSelectByContainsTextFromDropDown(salaryTypeDropDown,sType);
        log.info("Select salary type : " + sType);

    }

    public void selectJobType(String jobType) {

        pmSelectByContainsTextFromDropDown(jobTypeDropDown,jobType);
        log.info("Select job type : " + jobType);

    }

    public void clickOnFindJobsButton() {
        pmDoWaitUntilVisibilityOfElementLocated(By.id("hp-search-btn"),20).click();

       // pmClickOnElement(findJobBtn);
        log.info("Click on find jobs button : " + findJobBtn.toString());
    }


}
