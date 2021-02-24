package stepDefinitions;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

public class Steps extends BaseClass {

	@Before
	public void setUp() throws IOException {
		// reading config.prop
		configProp = new Properties();
		FileInputStream configPropFile = new FileInputStream("config.properties");
		configProp.load(configPropFile);
		logger = Logger.getLogger("nopCommerce");
		PropertyConfigurator.configure("log4j.properties");
		String br = configProp.getProperty("browser");
		if (br.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver",configProp.getProperty("chromepath"));
			driver = new ChromeDriver();
		}
		else if (br.equals("firefox")) {
			System.setProperty("webdriver.gecko.driver", configProp.getProperty("firefoxpath"));
			driver = new FirefoxDriver();
		}
		else if(br.equals("edge")) {
			System.setProperty("webdriver.edge.driver", configProp.getProperty("edgepath"));
			driver = new EdgeDriver();
			
		}
		logger.info("Launching  browser");

	}

	@Given("^User Launch Chrome browser$")
	public void user_Launch_Chrome_browser() throws Throwable {

		lp = new LoginPage(driver);

	}

	@When("^User opens URL \"(.*?)\"$")
	public void user_opens_URL(String url) throws Throwable {
		driver.get(url);
		logger.info("opening URL ");
		driver.manage().window().maximize();
	}

	@When("^User enters Email as \"(.*?)\" and Password as \"(.*?)\"$")
	public void user_enters_Email_as_and_Password_as(String email, String password) throws Throwable {
		logger.info("Entering credentials");
		lp.setUserName(email);
		lp.setPassword(password);
	}

	@When("^Click on login$")
	public void click_on_login() throws Throwable {
		logger.info("Clicked on login");
		lp.login();
	}

	@Then("^Page Title should be \"(.*?)\"$")
	public void page_Title_should_be(String title) throws Throwable {
		if (driver.getPageSource().contains("Login was unsuccessful")) {
			logger.info("*********Login Failed ***************");
			driver.quit();
			Assert.assertTrue(false);
		} else {
			logger.info("*********Login successfull ***************");
			Assert.assertEquals(title, driver.getTitle());
		}

	}

	@When("^User click on Log out link$")
	public void user_click_on_Log_out_link() throws Throwable {
		logger.info("*********Logout from application***************");
		lp.logout();
		Thread.sleep(5000);
	}

	@Then("^close browser$")
	public void close_browser() throws Throwable {
		logger.info("*********Closing application ***************");
		driver.quit();

	}

	// Customer feature step definitions..........................................
	// Adding Customer

	@Then("^User can view Dashboard$")
	public void user_can_view_Dashboard() throws Throwable {
		logger.info("********* Adding Customer Scenario started  ***************");
		addCust = new AddCustomerPage(driver);
		logger.info("********* Dashboard Display validation ***************");
		Assert.assertEquals("Dashboard / nopCommerce administration", addCust.getPageTitle());

	}

	@When("^User click on customer Menu$")
	public void user_click_on_customer_Menu() throws Throwable {
		Thread.sleep(5000);
		addCust.clickOnCustomersMenu();

	}

	@When("^Click on Customers Item$")
	public void click_on_Customers_Item() throws Throwable {
		Thread.sleep(5000);
		addCust.clickOnCustomersMenuItem();

	}

	@When("^Click on Add new button$")
	public void click_on_Add_new_button() throws Throwable {
		Thread.sleep(5000);
		addCust.clickOnAddnew();

	}

	@Then("^User can View Add new Customer Page$")
	public void user_can_View_Add_new_Customer_Page() throws Throwable {
		Thread.sleep(3000);
		Assert.assertEquals("Add a new customer / nopCommerce administration", addCust.getPageTitle());

	}

	@When("^User enter customer info$")
	public void user_enter_customer_info() throws Throwable {
		logger.info("********* Providing Customer details ***************");
		String email = randomString() + "@gmail.com";
		addCust.setEmail(email);
		addCust.setPassword("test123");
		Thread.sleep(3000);
		addCust.setCustomerRoles("Guests");
		Thread.sleep(3000);

		addCust.setManagerOfVendor("Vendor 2");
		addCust.setGender("Male");
		addCust.setFirstName("Charan");
		addCust.setLastName("Budama");
		addCust.setDob("5/08/1987"); // Format: D/MM/YYY
		addCust.setCompanyName("cucumber QA");
		addCust.setAdminContent("Cucumber framework.........");

	}

	@When("^click on save button$")
	public void click_on_save_button() throws Throwable {
		addCust.clickOnSave();
		Thread.sleep(5000);

	}

	@Then("^user can view confirmation message \"(.*?)\"$")
	public void user_can_view_confirmation_message(String string) throws Throwable {
		logger.info("********* Add customer validation ***************");
		Assert.assertTrue(driver.findElement(By.tagName("body")).getText()
				.contains("The new customer has been added successfully"));

	}

	// Search customer by email id

	@When("^Enter customer EMail$")
	public void enter_customer_EMail() throws Throwable {
		spage = new SearchCustomerPage(driver);
		spage.setEmail("victoria_victoria@nopCommerce.com");
	}

	@When("^Click on search button$")
	public void click_on_search_button() throws Throwable {
		spage.clickSearch();
		Thread.sleep(5000);
	}

	@Then("^User should found Email in the Search table$")
	public void user_should_found_Email_in_the_Search_table() throws Throwable {
		logger.info("********* Search customer by email validation ***************");
		Assert.assertEquals(true, (spage.searchByEmailID("victoria_victoria@nopCommerce.com")));

	}

	// Search by customer First Name

	@When("^Enter customer Name$")
	public void enter_customer_Name() throws Throwable {
		logger.info("********* Search custoemr by Name Scenario started ***************");
		spage = new SearchCustomerPage(driver);
		spage.setFirstName("Brenda");
	}

	@Then("^User should found Name in the Search table$")
	public void user_should_found_Name_in_the_Search_table() throws Throwable {
		Assert.assertEquals(true, (spage.searchByFname("Brenda")));
	}

	// Search by Customer Last Name

	@When("^Enter customer last Name$")
	public void enter_customer_last_Name() throws Throwable {
		spage = new SearchCustomerPage(driver);
		spage.setLastName("Lindgren");

	}

	@Then("^User should found last Name in the Search table$")
	public void user_should_found_last_Name_in_the_Search_table() throws Throwable {
		logger.info("********* Search custoemr by Last Scenario started ***************");
		Assert.assertEquals(true, (spage.searchByLname("Lindgren")));

	}

}
