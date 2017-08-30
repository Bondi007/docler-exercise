package testngtestcases;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import pages.HomePage;


public class TestNGTestCase4 {

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
   
  @Test(description = "TC4 - Test Home Page - check header, paragraph, URL")
  public void CheckHomePageTexts() {
	  HomePage homePage = new pages.HomePage(driver);
	  utilities.CommonMethods.goTo(driver, "home");
	  homePage.checkTexts();
	  utilities.CommonMethods.isMenuActive(driver, "home");
	  utilities.CommonMethods.checkURL(driver, "http://uitest.duodecadits.com/");
  }
}
