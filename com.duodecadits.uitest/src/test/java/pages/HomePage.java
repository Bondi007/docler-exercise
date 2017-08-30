package pages;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HomePage {
	protected WebDriver driver;
	
	static final String HEADER = "Welcome to the Docler Holding QA Department";
	static final String PARAGRAPH = "This site is dedicated to perform some exercises and demonstrate automated web testing.";
	
    public HomePage(WebDriver driver) {
    	this.driver = driver;
    }
  	  
    public void checkTexts(){
  	    driver.findElement(By.xpath(".//h1[contains(text(),'" + HEADER + "')]"));
  	    driver.findElement(By.xpath(".//p[contains(text(),'" + PARAGRAPH + "')]"));

    } 
 }
