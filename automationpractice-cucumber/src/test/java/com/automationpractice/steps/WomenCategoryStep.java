package com.automationpractice.steps;

import com.automationpractice.pages.HomePage;
import com.automationpractice.pages.ProductPage;
import com.automationpractice.pages.WomenCategoryPage;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

public class WomenCategoryStep {
    @When("^I click on women category$")
    public void iClickOnWomenCategory() {
        new HomePage().clickOnWomenTab();

    }

    @Then("^I verify women page text \"([^\"]*)\"$")
    public void iVerifyWomenPageText(String eMessage) {
        new WomenCategoryPage().verifyWomenText(eMessage);

    }


    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new ProductPage().addToCart();
    }

    @Then("^I verify the product added message \"([^\"]*)\"$")
    public void iVerifyTheProductAddedMessage(String eMessage) {
new ProductPage().verifyPopUpMessage(eMessage);
    }

    @And("^I close the popup$")
    public void iCloseThePopup() {
        new ProductPage().closeThePopUpMessage();
    }

    @When("^I click on the product \"([^\"]*)\"$")
    public void iClickOnTheProduct(String product) {
        new ProductPage().selectProduct(product);
    }

    @And("^I change quantity \"([^\"]*)\"$")
    public void iChangeQuantity(String qty) {
        new ProductPage().changeQty(qty);
    }

    @And("^I Select the size \"([^\"]*)\"$")
    public void iSelectTheSize(String size) {
        new ProductPage().selectSize(size);

    }

    @And("^I select the colour\"([^\"]*)\"$")
    public void iSelectTheColour(String colour) {
        new ProductPage().selectColour(colour);

    }
}
