package com.automationpractice.steps;

import com.automationpractice.pages.CreateAccountPage;
import com.automationpractice.pages.SignInPage;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

public class CreateAccountSteps {
    @When("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new SignInPage().enterEmail(email);
    }

    @And("^I click on create an account button$")
    public void iClickOnCreateAnAccountButton() {
        new SignInPage().clickOnCreateAcc();
    }

    @And("^I fill all mandatory fields$")
    public void iFillAllMandatoryFields(DataTable table) {
        List<String> uData = table.asList(String.class);
        new CreateAccountPage().fillMandatoryFields(uData.get(0),uData.get(1),uData.get(2),uData.get(3),uData.get(4),uData.get(5),uData.get(6),uData.get(7));
    }

    @Then("^I click on register button$")
    public void iClickOnRegisterButton() {
        new CreateAccountPage().clickOnRegister();
    }

    @And("^I verify my account message \"([^\"]*)\"$")
    public void iVerifyMyAccountMessage(String eMessage) {
        new CreateAccountPage().verifyMyAccountText(eMessage);
    }
}
