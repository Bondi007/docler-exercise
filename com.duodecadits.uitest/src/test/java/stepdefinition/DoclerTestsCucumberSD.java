package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.ErrorPage;
import pages.FormPage;
import pages.HomePage;
import pages.UITestingPage;

public class DoclerTestsCucumberSD {

	WebDriver driver = new ChromeDriver();
	HomePage hp = new HomePage(driver);
	FormPage fp = PageFactory.initElements(driver, FormPage.class);	
	ErrorPage ep = new ErrorPage(driver);
	UITestingPage uitp = new UITestingPage(driver);
	
	@Given("^The user opens the website$")
	public void the_user_opens_the_website() throws Throwable {
		utilities.CommonMethods.goTo(driver, "home");;
			
	}

	@When("^The user clicks on Home button in the upper Menu$")
	public void the_user_clicks_on_Home_button_in_the_upper_Menu() throws Throwable {

  	    driver.findElement(By.id("home")).click();
	}

	@Then("^The user is navigated to the Home page$")
	public void the_user_is_navigated_to_the_Home_page() throws Throwable {
		utilities.CommonMethods.checkURL(driver,"http://uitest.duodecadits.com/");
	}

	@And("^Home menu turns to active status$")
	public void home_menu_turns_to_active_status() throws Throwable {
		utilities.CommonMethods.isMenuActive(driver, "home"); 
	}

	@And("^Page title is UI Testing Site$")
	public void page_title_is_UI_Testing_Site() throws Throwable {
  	    utilities.CommonMethods.checkTitle(driver);
	}

	@And("^Company logo is displayed$")
	public void company_logo_is_displayed() throws Throwable {
		utilities.CommonMethods.checkLogo(driver);
	}

	@And("^The user leaves the website$")
	public void the_user_leaves_the_website() throws Throwable {
    	driver.quit();
	}


	@Then("^The user is navigated to the Form page$")
	public void the_user_is_navigated_to_the_Form_page() throws Throwable {
		utilities.CommonMethods.checkURL(driver, "http://uitest.duodecadits.com/form.html");
	}

	@Then("^The user types \"([^\"]*)\" in the input box$")
	public void the_user_types_in_the_input_box(String name) throws Throwable {
		fp.enterName(name);
	}
	
	@When("^The user clicks on Submit button$")
	public void the_user_clicks_on_Submit_button() throws Throwable {
		fp.clickOnSubmit();
	}
	
	@Then("^Page displays Hello \"([^\"]*)\"! message$")
	public void page_displays_Hello_message(String name) throws Throwable {
		fp.checkName(name);
	}
	
	@Then("^Form menu turns to active status$")
	public void form_menu_turns_to_active_status() throws Throwable {
  	    utilities.CommonMethods.isMenuActive(driver, "form");
	}
	
	@When("^The user clicks on Error button in the upper Menu$")
	public void the_user_clicks_on_Error_button_in_the_upper_Menu() throws Throwable {
		utilities.CommonMethods.goTo(driver, "error");
	}

	@Then("^The user gets Error File not found message$")
	public void the_user_gets_Error_File_not_found_message() throws Throwable {
		ep.checkError();
	}

	@When("^The user clicks on UI Testing button in the upper Menu$")
	public void the_user_clicks_on_UI_Testing_button_in_the_upper_Menu() throws Throwable {
		utilities.CommonMethods.goTo(driver, "site");
	}
	
	@When("^The user clicks on Form button in the upper Menu$")
	public void the_user_clicks_on_Form_button_in_the_upper_Menu() throws Throwable {
		utilities.CommonMethods.goTo(driver, "form");
	}

	@Then("^Correct Header and Paragraph is displayed$")
	public void correct_Header_and_Paragraph_is_displayed() throws Throwable {
		hp.checkTexts();
	}

	@Then("^The input form and submit button is displayed$")
	public void the_input_form_and_submit_button_is_displayed() throws Throwable {
		fp.checkIfFormIsDisplayed();
	}
	
	@Then("^The user is navigated to the Error page$")
	public void the_user_is_navigated_to_the_Error_page() throws Throwable {
		utilities.CommonMethods.checkURL(driver, "http://uitest.duodecadits.com/error");
	}
}
