Feature: Automated UI testing of http://uitest.duodecadits.com
 
    Scenario: CTC1 - Check logo and title - Form Page
 Given The user opens the website
 When The user clicks on Form button in the upper Menu
 Then The user is navigated to the Form page
 And Page title is UI Testing Site
 And Company logo is displayed
 And The user leaves the website
 
    Scenario Outline: CTC2 - Check logo and title - Form Page - after submitting the name
 Given The user opens the website
 When The user clicks on Form button in the upper Menu
 Then The user is navigated to the Form page
 And The user types "<username>" in the input box
 And The user clicks on Submit button
 And Page title is UI Testing Site
 And Company logo is displayed
 And The user leaves the website
 Examples:
 | username |
 | Test |
 
    Scenario: CTC3 - Check logo and title - Home Page
 Given The user opens the website
 When The user clicks on Home button in the upper Menu
 Then The user is navigated to the Home page
 And Page title is UI Testing Site
 And Company logo is displayed
 And The user leaves the website
 
    Scenario: CTC4 - Test UI Testing Page - Check if it navigates to Home page
 Given The user opens the website
 When The user clicks on UI Testing button in the upper Menu
 Then The user is navigated to the Home page
 And The user leaves the website
    
    Scenario: CTC5 - Test Error Page
 Given The user opens the website
 When The user clicks on Error button in the upper Menu
 Then The user is navigated to the Error page
 And The user gets Error File not found message
 And The user leaves the website
 
 Scenario: CTC6 - Test Home Page - Check if Home menu turns to active status
 Given The user opens the website
 When The user clicks on Home button in the upper Menu
 Then The user is navigated to the Home page
 And Home menu turns to active status
 And The user leaves the website
 
 Scenario: CTC7 - Test Home Page - Check if the correct header and paragraph are displayed
 Given The user opens the website
 When The user clicks on Home button in the upper Menu
 Then The user is navigated to the Home page
 And Correct Header and Paragraph is displayed
 And The user leaves the website
 
 Scenario: CTC8 - Test Form Page - Check if Input box and Submit button are displayed
 Given The user opens the website
 When The user clicks on Form button in the upper Menu
 Then The user is navigated to the Form page
 And The input form and submit button is displayed
 And The user leaves the website
 
 Scenario: CTC9 - Test Form Page - Check if Form menu turns to active status
 Given The user opens the website
 When The user clicks on Form button in the upper Menu
 Then The user is navigated to the Form page
 And Form menu turns to active status
 And The user leaves the website
  
    Scenario Outline: CTC10 - Test Form Page - Test submitting different names
 Given The user opens the website
 When The user clicks on Form button in the upper Menu
 Then The user is navigated to the Form page
 And The user types "<username>" in the input box
 And The user clicks on Submit button
 And Page displays Hello "<username>"! message
 And The user leaves the website
 Examples:
 | username |
 | John |
 | Sophia |
 | Charlie |
 | Emily |
 
 
