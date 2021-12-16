Feature: I should be able to create an account
  @Smoke
  Scenario: verify That I Should Create Account Successfully
    Given I click on sigh in link
    When I enter email "asdflkjh@gmail.com"
    And I click on create an account button
    And I fill all mandatory fields
    |Ram|Kumar|abc1234|9 Ayodhya Street|London|Arizona|12345|01234567891|
    Then I click on register button
    And I verify my account message "My Account"

