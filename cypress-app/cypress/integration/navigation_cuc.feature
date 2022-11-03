Feature: Navigation
Scenario Outline:
  When I visit home screen
  And I click "<navItem>"
  Then I should be on the "<navItemName>" page

  Examples:
  | navItem             | navItemName           |
  | Communities         | Communities           |
  | Products & Services | Products and Services |
  | Case Studies        | Case Studies          |
  | Learning            | Learning              |