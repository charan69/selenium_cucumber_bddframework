package selenium_training;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.Assert.assertEquals;

import org.junit.*;


public class UITests {

	@Test
	public void verify() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "./Drivers\\chromedriver.exe");
		WebDriver webDriver = new ChromeDriver();
		
		//Verify Login buttons are visible
		webDriver.get(
				"https://codility-frontend-prod.s3.amazonaws.com/media/task_static/qa_login_page/9a83bda125cd7398f9f482a3d6d45ea4/static/attachments/reference_page.html");
		webDriver.manage().window().maximize();
		if (webDriver.findElement(By.id("email-input")).isDisplayed()) {
			System.out.println("Email with id email-input is displayed");
		}
		if (webDriver.findElement(By.id("password-input")).isDisplayed()) {
			System.out.println("Password with Id  password-input is displayed");
		}
		if (webDriver.findElement(By.id("login-button")).isDisplayed()) {
			System.out.println("Login button with Id  login-button is displayed");
		}

		//Verify successful login
		webDriver.findElement(By.id("email-input")).sendKeys("login@codility.com");
		webDriver.findElement(By.id("password-input")).sendKeys("password");
		webDriver.findElement(By.id("login-button")).click();
		String welcomeMsg = webDriver.findElement(By.xpath("//div[@class='message success']")).getText();
		assertEquals(welcomeMsg, "Welcome to Codility");
		
		//Verify invalid login 
		webDriver.get(
				"https://codility-frontend-prod.s3.amazonaws.com/media/task_static/qa_login_page/9a83bda125cd7398f9f482a3d6d45ea4/static/attachments/reference_page.html");
		webDriver.manage().window().maximize();
		webDriver.findElement(By.id("email-input")).sendKeys("unknown@codility.com");
		webDriver.findElement(By.id("password-input")).sendKeys("password");
		webDriver.findElement(By.id("login-button")).click();
		String errorMsg = webDriver.findElement(By.xpath("//div[@class='message error']")).getText();
		assertEquals(errorMsg, "You shall not pass! Arr!");
		
		//verify invalid email
		webDriver.get(
				"https://codility-frontend-prod.s3.amazonaws.com/media/task_static/qa_login_page/9a83bda125cd7398f9f482a3d6d45ea4/static/attachments/reference_page.html");
		webDriver.manage().window().maximize();
		webDriver.findElement(By.id("email-input")).sendKeys("tretret");
		webDriver.findElement(By.id("password-input")).sendKeys("password");
		webDriver.findElement(By.id("login-button")).click();
		String invaldEmail = webDriver.findElement(By.xpath("//div[@class='validation error']")).getText();
		assertEquals(invaldEmail, "Enter a valid email");
		
		//verify blank credentials
		webDriver.get(
				"https://codility-frontend-prod.s3.amazonaws.com/media/task_static/qa_login_page/9a83bda125cd7398f9f482a3d6d45ea4/static/attachments/reference_page.html");
		webDriver.manage().window().maximize();
		webDriver.findElement(By.id("email-input")).sendKeys("");
		webDriver.findElement(By.id("password-input")).sendKeys("");
		webDriver.findElement(By.id("login-button")).click();
		String blankEmail = webDriver.findElement(By.xpath("//div[normalize-space()='Email is required']")).getText();
		String blankPassword =webDriver.findElement(By.xpath("//div[normalize-space()='Password is required']")).getText();
		assertEquals(blankEmail, "Email is required");
		assertEquals(blankPassword, "Password is required");
		
		//quit driver
		webDriver.quit();
		

	}
}
