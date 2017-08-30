package utilities;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class CommonMethods {	
	static final String HOME_URL = "http://uitest.duodecadits.com/";
	static final String TITLE = "UI Testing Site";	
	static WebDriver driver;
   	
	public static void goTo(WebDriver driver, String menuid){
    	driver.get(HOME_URL);
    	driver.manage().window().maximize();
  	    driver.findElement(By.id(menuid)).click();
    }
	
	public static void checkLogo(WebDriver driver){
    	WebElement logo = driver.findElement(By.id("dh_logo"));
    	Assert.assertEquals(true, logo.isDisplayed());
    }

	public static void checkTitle(WebDriver driver){
		Assert.assertEquals(TITLE, driver.getTitle());
    }	

	public static void checkURL(WebDriver driver, String URL){
		Assert.assertEquals(URL, driver.getCurrentUrl());
    }	
	
	public static void isMenuActive(WebDriver driver, String pageName){
  	    driver.findElement(By.xpath(".//*[@class='active']/a[@id='" +  pageName + "']"));
	}	
}
