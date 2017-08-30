package testngtestcases;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import pages.ErrorPage;


public class TestNGTestCase5 {

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
  
  @Test(description = "TC5 - Test Error Page - check if the user gets Error 404")
  public void CheckErrorPage() {
	  ErrorPage errorPage = new pages.ErrorPage(driver);
	  utilities.CommonMethods.goTo(driver, "error");
	  errorPage.checkError();
	  utilities.CommonMethods.checkURL(driver, "http://uitest.duodecadits.com/error");
  }  
}
