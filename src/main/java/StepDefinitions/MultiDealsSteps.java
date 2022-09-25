package StepDefinitions;

import static org.testng.Assert.assertTrue;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MultiDealsSteps
{
	WebDriver driver;
	
	@Before
	public void InitializeBedore()
	{
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\main\\java\\resources\\chromedriver.exe");
    	driver = new ChromeDriver();
    	driver.manage().window().maximize();
	}
    @Given("^Julian is on Application Home Page$")
    public void Julian_is_on_Application_Home_Page() 
    {
    	
    	driver.get("https://www.freecrm.com/index.html");
    	//driver.manage().timeouts().implicitWait(30, TimeUnit.SECONDS);
    }
    
    @After
    public void closeBrowser()
    {
    	driver.quit();
    }
    
    @When("^Application Page Tittle is FREE CRM$")
    public void application_Page_Tittle_is_FREE_CRM()
    {
     String actualTittle = driver.getTitle();
     String expectedTittle = "#1 Free CRM customer relationship management software cloud";
     Assert.assertEquals(expectedTittle, actualTittle);
   
    }
    
	@Then("^Julian press the button login$")
    public void Julian_press_the_button_login()
    {		
	WebDriverWait wait = new WebDriverWait(driver,30);
	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[1]/header/div/nav/div/div/a")));
	driver.findElement(By.xpath("/html/body/div[1]/header/div/nav/div/div/a")).click();  
                
    }
	
    @Then("^Julian enters username and password$")
    public void Julian_enters_username_and_password(DataTable credentials) throws InterruptedException
    {
    	
    	for(Map<String, String>dataMap : credentials.asMaps(String.class, String.class))
    	{
    	       Thread.sleep(20000);
    		    WebDriverWait wait = new WebDriverWait(driver,30);
    		    wait.until(ExpectedConditions.presenceOfElementLocated(By.name("email")));
    		    driver.findElement(By.name("email")).sendKeys(dataMap.get("username"));
    		    
    		    wait.until(ExpectedConditions.presenceOfElementLocated(By.name("password")));
    		    driver.findElement(By.name("password")).sendKeys(dataMap.get("password"));  	
    	}
          
    }
    
    @And("^Julian click on Login button\\.$")
    public void Julian_click_on_Login_button() throws InterruptedException 
    {
    	Thread.sleep(2000);
     driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]")).click();
    }
    
    @When("^Julian navigate to user Profile page$")
    public void Julian_navigate_to_user_Profile_page()
    {
    	 String actualTittle = driver.getTitle();
	     String expectedTittle = "Cogmento CRM";
	     Assert.assertEquals(expectedTittle, actualTittle);
    }
    
    @Then("^Go to Deals$")
    public void go_to_Deals() throws InterruptedException 
    {
    	Thread.sleep(5000);
    	Actions builder = new Actions(driver);
    	builder.moveToElement(driver.findElement(By.xpath("//*[@id=\"main-nav\"]/div[5]/a"))).build().perform();   
    }
    
    @Then("^click on button Plus to add New Deal Form$")
    public void click_on_button_Plus_to_add_New_Deal_Form() 
    {
    	driver.findElement(By.xpath("//*[@id=\"main-nav\"]/div[5]/button/i")).click();  
    }
    
    @Then("^Julian enters deal data$")
    public void Julian_enters_deal_data(DataTable data) throws InterruptedException  
    {
    	for(Map<String, String>dataMap : data.asMaps(String.class, String.class))
    	{
    		driver.findElement(By.name("title")).sendKeys(dataMap.get("Title"));
        	driver.findElement(By.name("amount")).sendKeys(dataMap.get("Amount"));
        	driver.findElement(By.name("probability")).sendKeys(dataMap.get("Probability"));
        	driver.findElement(By.name("commission")).sendKeys(dataMap.get("Commision"));
        	driver.findElement(By.name("description")).sendKeys(dataMap.get("Description"));
        	driver.findElement(By.name("next_step")).sendKeys(dataMap.get("Next Step"));
        	Thread.sleep(5000);	
        	
        	driver.findElement(By.xpath("//*[@id=\"dashboard-toolbar\"]/div[2]/div/button[2]")).click(); 
        	
        	Thread.sleep(5000);	
           	Actions builder = new Actions(driver);
        	builder.moveToElement(driver.findElement(By.xpath("//*[@id=\"main-nav\"]/div[5]/a"))).build().perform();   
        	driver.findElement(By.xpath("//*[@id=\"main-nav\"]/div[5]/button/i")).click();  
    	}
    	driver.close();
    }
  
    @Then("^Application Page shows message incorrect credentials$")
    public void application_Page_shows_message_incorrect_credentials() throws InterruptedException
    {
    	Thread.sleep(5000);	
    	String actualString = driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]")).getText();
    	 //Assert.assertEquals("Something went wrong...Invalid login", actualString);
    	assertTrue(actualString.contains("Something went wrong"));
		
    }
    
   @Then("^Save the Deal$")
   public void save_the_Deal() 
     {
    	driver.findElement(By.xpath("//*[@id=\"dashboard-toolbar\"]/div[2]/div/button[2]")).click(); 
     }
   
//    @Given("^Close the Browser$")
 //   public void Close_the_Browser() 
 //   {
   //    driver.close();
 //   }
    
}
