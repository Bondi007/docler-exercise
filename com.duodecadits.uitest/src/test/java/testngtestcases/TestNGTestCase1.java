package testngtestcases;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import pages.FormPage;


public class TestNGTestCase1 {

  protected static WebDriver driver;
  
  @BeforeTest
  public void initializeBrowser() {
	        driver = new ChromeDriver();
	        driver.manage().window().maximize();
	        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    }

  @AfterTest
  public void tearDown() {
	  driver.quit();
	    }  
  
  
  @Test(description = "TC1 - Check title and company logo on each site")
  public void CheckTitleAndLogo() {
	// Home Page
	  utilities.CommonMethods.goTo(driver, "home");
	  utilities.CommonMethods.checkTitle(driver);
	  utilities.CommonMethods.checkLogo(driver);
		  
	  // Form Page
	  FormPage formPage = PageFactory.initElements(driver, FormPage.class);
	  utilities.CommonMethods.goTo(driver, "form");
	  utilities.CommonMethods.checkTitle(driver);
	  utilities.CommonMethods.checkLogo(driver);
	  // Check title and company logo after submitting the name
	  formPage.enterName("Test");
	  formPage.clickOnSubmit();
	  utilities.CommonMethods.checkTitle(driver);
	  utilities.CommonMethods.checkLogo(driver);
	    
	  // UI Testing Page
	  utilities.CommonMethods.goTo(driver, "site");
	  utilities.CommonMethods.checkTitle(driver);
	  utilities.CommonMethods.checkLogo(driver);
	}
	  
	  
   
}
