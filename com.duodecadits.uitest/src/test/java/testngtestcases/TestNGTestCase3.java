package testngtestcases;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import pages.FormPage;


public class TestNGTestCase3 {

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
  
  @Test(description = "Test Form Page - check if form menu is active and the input box and submit button are displayed")
  public void CheckFormPage() {
	  FormPage formPage = PageFactory.initElements(driver, FormPage.class);
      utilities.CommonMethods.goTo(driver, "form");
      formPage.checkIfFormIsDisplayed();
      utilities.CommonMethods.isMenuActive(driver, "form");
  }
}
