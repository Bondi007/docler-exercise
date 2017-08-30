package testngtestcases;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;


public class TestNGTestCase6 {

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
  
  @Test(description = "TC6 - Test UI Testing Page - check if the user is navigated to Home Page")
  public void CheckUITestingPage() {
	  utilities.CommonMethods.goTo(driver, "site");
	  utilities.CommonMethods.checkURL(driver, "http://uitest.duodecadits.com/");
  }
}
