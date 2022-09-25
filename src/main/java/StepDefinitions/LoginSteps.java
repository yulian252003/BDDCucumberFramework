/*package StepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class LoginSteps 
{	    
	WebDriver driver;
	    @Given("^User is on Application Home Page$")
	    public void user_is_on_Application_Home_Page() 
	    {
	    	System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\main\\java\\resources\\chromedriver.exe");
	    	driver = new ChromeDriver();
	    	driver.manage().window().maximize();
	    	driver.get("https://www.freecrm.com/index.html");
	    	//driver.manage().timeouts().implicitWait(30, TimeUnit.SECONDS);
	    }

		@When("^Application Page Tittle is FREE CRM$")
	    public void application_Page_Tittle_is_FREE_CRM()
        {
	     String actualTittle = driver.getTitle();
	     String expectedTittle = "Free CRM software for customer relationship management, sales, marketing campaigns and support.";
	     Assert.assertEquals(expectedTittle, actualTittle);
	   
	    }
		
		@Then("^User press the button login$")
		    public void user_press_the_button_login()
		    {	
			
			WebDriverWait wait = new WebDriverWait(driver,30);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText("Login")));
			driver.findElement(By.linkText("Login")).click();  
	                    
		    }

	    @Then("^User enters \"(.*)\" and \"(.*)\"$")
	    public void user_enters_username_and_password(String useremail, String uspassword) throws InterruptedException
	    {
	        Thread.sleep(50000);
		    WebDriverWait wait = new WebDriverWait(driver,30);
		    wait.until(ExpectedConditions.presenceOfElementLocated(By.name("email")));
		    driver.findElement(By.name("email")).sendKeys(useremail);
		    
		    wait.until(ExpectedConditions.presenceOfElementLocated(By.name("password")));
		    driver.findElement(By.name("password")).sendKeys(uspassword);           
	    }

	    @And("^User click on Login button\\.$")
	    public void user_click_on_Login_button() throws InterruptedException 
	    {
	    	Thread.sleep(2000);
	     driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]")).click();
	    }

	    @When("^User navigate to user Profile page$")
	    public void user_navigate_to_user_Profile_page()
	    {
	    	 String actualTittle = driver.getTitle();
		     String expectedTittle = "Cogmento CRM";
		     Assert.assertEquals(expectedTittle, actualTittle);
	    }
	    
	    @Then("^Go to Contacts$")
	    public void go_to_Contacts() throws InterruptedException 
	    {
	    	Thread.sleep(5000);
	    	Actions builder = new Actions(driver);
	    	builder.moveToElement(driver.findElement(By.xpath("//*[@id=\"main-nav\"]/div[3]/a"))).build().perform();   
	    }

	    @Then("^click on button Plus to add contact Form$")
	    public void click_on_button_Plus_to_add_contact_Form() 
	    {
	    	driver.findElement(By.xpath("//*[@id=\"main-nav\"]/div[3]/button/i")).click();  
	    }

	    @Then("^user enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	    public void user_enters_and_and_and(String firstname, String lastname, String identifier, String aposition) 
	    {
	    	 driver.findElement(By.name("first_name")).sendKeys(firstname);
	    	 driver.findElement(By.name("last_name")).sendKeys(lastname);
	    	 driver.findElement(By.name("identifier")).sendKeys(identifier);
	    	 driver.findElement(By.name("position")).sendKeys(aposition);
	    }

	    @Then("^Save the Contact$")
	    public void save_the_Contact() 
	    {
	    	driver.findElement(By.xpath("//*[@id=\"dashboard-toolbar\"]/div[2]/div/button[2]")).click(); 
	    }


	    @Given("^Close the Browser$")
	    public void Close_the_Browser() 
	    {
	       driver.close();
	    }
	   
}*/
