package pages;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.testng.Assert;

public class FormPage {
	
	private WebDriver driver;
	
	@FindBy(how=How.ID, using ="hello-input")
	private WebElement formInput;
    
    @FindBy(how=How.ID, using ="hello-submit")
    private WebElement submitButton;

    @FindBy(how=How.ID, using ="form")
    private WebElement formMenu;
   
    
    public FormPage(WebDriver driver) {
    	this.driver = driver;
    }
    
    public void checkIfFormIsDisplayed(){
  	  	formInput.isDisplayed();
  	    submitButton.isDisplayed();    
    }
    
    public void enterName(String name){
    	formInput.clear();
    	formInput.sendKeys(name);
    }
    
    public void clickOnSubmit(){
    	submitButton.click();
    }
    
    public void checkName(String name){
    	Assert.assertEquals("http://uitest.duodecadits.com/hello.html?myName=" + name, driver.getCurrentUrl());
    	String helloText = driver.findElement(By.xpath(".//*[@id='hello-text']")).getText();
    	Assert.assertEquals("Hello " + name + "!", helloText);
    }    
}
