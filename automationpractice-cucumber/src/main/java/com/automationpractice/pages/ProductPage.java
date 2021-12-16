package com.automationpractice.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

import static com.automationpractice.drivermanager.ManageDriver.driver;


public class ProductPage extends com.automationpractice.pages.HomePage {
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    public ProductPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//ul[@class='product_list grid row']//li//div//div//div//a//img")
    List<WebElement> products;


    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement quantity;
    @FindBy(xpath = "//select[@class='form-control attribute_select no-print']")
    WebElement sizes;
    @FindBy(xpath = "//ul[@class='clearfix']//li//a")
    List<WebElement> listOfColours;

    @FindBy(xpath = "//span[normalize-space()='Add to cart']")
    WebElement addToCartButton;
    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement popUpMessageTextLink;
    @FindBy(xpath = "//span[@title='Close window']")
    WebElement popUpCloseButtonLink;
    @FindBy(xpath = "//iframe[@class='fancybox-iframe']")
    WebElement iFrame;

    public void selectProduct(String product) {
        for (WebElement pro : products) {
            if (pro.getAttribute("title").equalsIgnoreCase(product)) {
                pmClickOnElement(pro);
                pmSwitchToIframe(iFrame);
                log.info("select product" + product);
            }
        }
    }


    public void changeQty(String qty) {

        pmClearTextFromElement(quantity);
        pmSendTextToElement(quantity, qty);
        log.info("Change Quantity" + quantity);
    }

    public void selectSize(String size) {
        pmSendTextToElement(sizes, size);
        log.info("select size" + size);
    }

    public void selectColour(String colour) {
        for(WebElement col :listOfColours){
            if(col.getAttribute("name").equalsIgnoreCase(colour)){
                pmClickOnElement(col);
                log.info("Select colour" + colour);
            }
        }

    }

    public void addToCart() {
        log.info("Adding to cart" + addToCartButton.toString());
        pmClickOnElement(addToCartButton);
        pmwaitWithThreadSleep(20);
    }



    public void verifyPopUpMessage(String eMessage) {
        log.info("Verifying the popup Message" + popUpMessageTextLink.toString());
        driver.switchTo().defaultContent();
        pmVerifyElements(popUpMessageTextLink, eMessage, "Page is not correctly displayed");
        pmwaitWithThreadSleep(20);
    }

    public void closeThePopUpMessage() {
        log.info("Closing the popup message" + popUpCloseButtonLink.toString());
        pmClickOnElement(popUpCloseButtonLink);
    }
}
