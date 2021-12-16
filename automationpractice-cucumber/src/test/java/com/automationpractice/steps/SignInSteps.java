package com.automationpractice.steps;

import com.automationpractice.pages.HomePage;
import com.automationpractice.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignInSteps {
    @Given("^I am on a sign in page$")
    public void iAmOnASignInPage() {

    }

    @When("^I click on sigh in link$")
    public void iClickOnSighInLink() {
        new HomePage().clickOnSignIn();
    }

    @Then("^verify authentication message \"([^\"]*)\"$")
    public void verifyAuthenticationMessage(String eMessage) {
        new SignInPage().verifyAuthMessage(eMessage);

    }

    @And("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String uName) {
        new SignInPage().enterUsername(uName);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String pWord) {
        new SignInPage().enterPassword(pWord);

    }

    @Then("^I click on sign in button$")
    public void iClickOnSignInButton() {
        new SignInPage().clickOnSigninButton();
    }

    @And("^I verify the error message \"([^\"]*)\"$")
    public void iVerifyTheErrorMessage(String eMessage) {
        new SignInPage().verifyErrorMessage(eMessage);

    }

    @And("^I verify that the sign out link is displayed$")
    public void iVerifyThatTheSignOutLinkIsDisplayed() {
        new SignInPage().verifySignOutLink();
    }

    @Then("^I click on sign out link$")
    public void iClickOnSignOutLink() {
        new SignInPage().clickOnSignOut();
    }

    @And("^I verify that sign in link is displayed$")
    public void iVerifyThatSignInLinkIsDisplayed() {
        new SignInPage().verifySignInLink();
    }
}
