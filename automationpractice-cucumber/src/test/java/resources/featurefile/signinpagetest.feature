Feature: I should verify sign in page functionality

  Background: I am on a sigh in page
    Given I am on a sign in page

  Scenario: I Should Navigate To SignIn Page SuccessFully

    When I click on sigh in link
    Then verify authentication message "AUTHENTICATION"

  Scenario Outline: verify The Error Message With InValidCredentials
    When I click on sigh in link
    And I enter username "<username>"
    And I enter password "<password>"
    Then I click on sign in button
    And I verify the error message "<message>"
    Examples:
      | username       | password | message                    |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |

  Scenario: verify That I Should LogIn SuccessFully With ValidCredentials
    When I click on sigh in link
    And I enter username "abcd@gmail.com"
    And I enter password "abc1234"
    Then I click on sign in button
    And  I verify that the sign out link is displayed

  Scenario: Verify That User Should Log Out SuccessFully
    When I click on sigh in link
    And I enter username "abcd@gmail.com"
    And I enter password "abc1234"
    And I click on sign in button
    Then I click on sign out link
    And I verify that sign in link is displayed


