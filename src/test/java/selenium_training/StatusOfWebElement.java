package selenium_training;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class StatusOfWebElement {

	public static void main(String[] args) throws InterruptedException, AWTException {
		WebDriverManager.chromedriver().setup();
		WebDriver chrodriver = new ChromeDriver();
		chrodriver.get("https://demo.nopcommerce.com/register");
		chrodriver.manage().window().maximize();
		Robot rb = new Robot();
		rb.keyPress(KeyEvent.VK_ENTER);
		rb.keyRelease(KeyEvent.VK_ENTER);
		//is displayed and is enabled
		System.out.println(chrodriver.findElement(By.xpath("//input[@id='small-searchterms']")).isDisplayed());
		System.out.println(chrodriver.findElement(By.xpath("//input[@id='small-searchterms']")).isEnabled());
		Set<String> li = new HashSet<String>();
		li = chrodriver.getWindowHandles();
		for(String windows:li) {
			if(windows.equals("Hello")) {
				chrodriver.switchTo().window(windows);
				chrodriver.switchTo().defaultContent();
			}
		}
		//is selected
		
		WebElement radiobutton = chrodriver.findElement(By.xpath("//input[@id='gender-male']"));
		radiobutton.click();
		Thread.sleep(3000);
		System.out.println(radiobutton.isSelected());
		
		//is selected for checkbox
		
		WebElement checkbox = chrodriver.findElement(By.xpath("//input[@id='Newsletter']"));
		System.out.println("By default " +checkbox.isSelected());
		checkbox.click();
		Thread.sleep(3000);
		System.out.println("After unchecking " +checkbox.isSelected());
		chrodriver.quit();

	}

}
