Feature: Job Search Test

  I want to verify the job Search result using different data

  @Regression

  Scenario Outline: User should be able to search jobs successfully

    When I enter "<Job Title>" job title field
    And I enter"<Location>" in the location field
    And I select"<Distance>" in the distance field
    And I click on the more search option link
    And I enter"<Minimum Salary>" in the minimum salary field
    And I enter"<Maximum Salary>" in the maximum salary field
    And I select"<Salary Type>" salary type
    And I select"<Job Type>" job type
    And I click on the find jobs button
    And I verify the result "<Result>"
    Then I am able to search jobs successfully
    Examples:
      | Job Title | Location | Distance        | Minimum Salary | Maximum Salary | Salary Type | Job Type       | Result                                      |
      | Tester    | Harrow   | up to 5 miles   | 30000          | 500000         | Per annum   | Permanent      | Permanent Tester jobs in Harrow on the Hill |
      | Tester    | Edgware  | up to 1 mile    | 2000           | 5000           | Per month   | Contract       | Contract Tester jobs in Edgware             |
      | Tester    | Wembley  | up to 10 miles  | 100            | 550            | Per day     | Part Time      | Part Time Tester jobs in Wembley            |
      | Tester    | Stanmore | up to 2 miles   | 35             | 200            | Per hour    | Temporary      | Temporary Tester jobs in Stanmore           |
      | Tester    | Pinner   | up to 25 miles  | 25000          | 100000         | Per annum   | Apprenticeship | Apprenticeship Tester jobs in Pinner        |
      | Tester    | Ruislip  | up to 7 miles   | 55000          | 65000          | Per annum   | Permanent      | Permanent Tester jobs in Ruislip            |
      | Tester    | Alperton | up to 750 miles | 27000          | 70000          | Per annum   | Temporary      | Temporary Tester jobs in Alperton           |

