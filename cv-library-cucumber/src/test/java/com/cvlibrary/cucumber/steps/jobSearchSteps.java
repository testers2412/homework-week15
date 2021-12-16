package com.cvlibrary.cucumber.steps;

import com.cvlibrary.pages.HomePage;
import com.cvlibrary.pages.ResultPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class jobSearchSteps {

    @When("^I enter \"([^\"]*)\" job title field$")
    public void iEnterJobTitleField(String jobTitle)  {
        new HomePage().enterJobTitle(jobTitle);
    }

    @And("^I enter\"([^\"]*)\" in the location field$")
    public void iEnterInTheLocationField(String location)  {
        new HomePage().enterLocation(location);

    }

    @And("^I select\"([^\"]*)\" in the distance field$")
    public void iSelectInTheDistanceField(String distance) throws InterruptedException {
new HomePage().selectDistance(distance);
    }

    @And("^I click on the more search option link$")
    public void iClickOnTheMoreSearchOptionLink() {
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^I enter\"([^\"]*)\" in the minimum salary field$")
    public void iEnterInTheMinimumSalaryField(String salaryMin)  {
        new HomePage().enterMinSalary(salaryMin);

    }

    @And("^I enter\"([^\"]*)\" in the maximum salary field$")
    public void iEnterInTheMaximumSalaryField(String salaryMax)  {
new HomePage().enterMaxSalary(salaryMax);
    }

    @And("^I select\"([^\"]*)\" salary type$")
    public void iSelectSalaryType(String salaryType) throws InterruptedException {
        new HomePage().selectSalaryType(salaryType);

    }

    @And("^I select\"([^\"]*)\" job type$")
    public void iSelectJobType(String jobType) throws InterruptedException {
        new HomePage().selectJobType(jobType);


    }

    @And("^I click on the find jobs button$")
    public void iClickOnTheFindJobsButton() {
        new HomePage().clickOnFindJobsButton();
    }

    @And("^I verify the result \"([^\"]*)\"$")
    public void iVerifyTheResult(String expectedMessage)  {
        new ResultPage().verifyTheResults(expectedMessage);

    }

    @Then("^I am able to search jobs successfully$")
    public void iAmAbleToSearchJobsSuccessfully() {
    }
}
