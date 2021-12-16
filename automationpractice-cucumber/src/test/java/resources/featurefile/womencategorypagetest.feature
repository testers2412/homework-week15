Feature: I should verify women category page functionality

  Scenario: Verify I Should Navigate To Women Category Page Successfully
    When I click on women category
    Then I verify women page text "Women"

  @Sanity
  Scenario Outline:verify I Should Add Product To The Cart Successfully
    Given I click on women category
    When I click on the product "<Product>"
    And I change quantity "<Qty>"
    And I Select the size "<Size>"
    And I select the colour"<Colour>"
    And I click on add to cart button
    Then I verify the product added message "Product successfully added to your shopping cart"
    And I close the popup
    Examples:
      | Product               | Qty | Size | Colour |
      | Blouse                | 2   | M    | White  |
      | Printed Dress         | 3   | L    | Orange |
      | Printed Chiffon Dress | 4   | S    | Green  |
      | Printed Summer Dress  | 2   | M    | Blue   |


