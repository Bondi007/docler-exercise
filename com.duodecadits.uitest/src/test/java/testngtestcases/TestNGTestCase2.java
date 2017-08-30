package testngtestcases;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import pages.FormPage;


public class TestNGTestCase2 {

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
   
  @Test(description = "TC2 - Test Form Page - test form with 3 different names")
  public void TestFormPageSubmit() {
	  FormPage formPage = PageFactory.initElements(driver, FormPage.class);
	  String[] names = {"Lisa", "Charlie", "John"};	  
	  for (int i = 0; i < names.length; i++) {
		  utilities.CommonMethods.goTo(driver, "form");
		  formPage.enterName(names[i]);
		  formPage.clickOnSubmit();
		  formPage.checkName(names[i]);
	}
  }
   
}
