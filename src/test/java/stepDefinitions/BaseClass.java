package stepDefinitions;

import java.util.Properties;

import org.apache.commons.lang3.RandomStringUtils;
import org.openqa.selenium.WebDriver;
import org.apache.log4j.Logger;
import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

public class BaseClass {
	
	public WebDriver driver;
	public LoginPage lp;
	public AddCustomerPage addCust;
	public SearchCustomerPage spage;
	public static Logger logger;
	public Properties configProp;
	
	
	 
	public static String randomString() {
		String randomString = RandomStringUtils.randomAlphabetic(5);
		return randomString;
		
	}

}
