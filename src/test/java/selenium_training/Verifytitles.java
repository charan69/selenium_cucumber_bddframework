package selenium_training;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Verifytitles {

	public static void main(String[] args) throws InterruptedException, AWTException {
		System.setProperty("webdriver.chrome.driver", "./Drivers\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.google.com/");
		driver.manage().window().maximize();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//input[@title='Search']")).sendKeys("Cricket");
		Robot rb = new Robot();
		rb.keyPress(KeyEvent.VK_ENTER);
		Thread.sleep(3000);
		List<WebElement> links = driver.findElements(By.tagName("a"));
		for(WebElement s1: links) {
			String s2 = driver.getTitle();
			System.out.println(s2);
		}
		

	}

}
