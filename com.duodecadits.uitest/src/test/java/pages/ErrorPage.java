package pages;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;

public class ErrorPage {
	private WebDriver driver;
	
    public ErrorPage(WebDriver driver) {
    	this.driver = driver;
    }
        
    public void checkError(){
	    Assert.assertTrue(driver.getTitle().contains("404")); 
    } 

	  	   
}
