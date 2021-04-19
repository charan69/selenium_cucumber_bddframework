package selenium_training;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class LaunchBrowser {

	public static void main(String[] args) {
/*		System.setProperty("webdriver.chrome.driver", "./Drivers\\chromedriver.exe");
		WebDriver chdriver = new ChromeDriver();
		chdriver.get("https://admin-demo.nopcommerce.com/login");
		System.setProperty("webdriver.gecko.driver", "./Drivers\\geckodriver.exe");
		WebDriver firedriver = new FirefoxDriver();
		firedriver.get("https://admin-demo.nopcommerce.com/login");
		System.setProperty("webdriver.edge.driver", "./Drivers\\msedgedriver.exe");
		WebDriver edgedriver = new EdgeDriver();
		edgedriver.get("https://admin-demo.nopcommerce.com/login"); */
		
		//without downloading the files and by using webdriver api
		
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.get("https://admin-demo.nopcommerce.com/login");
		driver.manage().window().maximize();
		System.out.println(driver.getTitle());
		System.out.println(driver.getCurrentUrl());
		//System.out.println(driver.getPageSource());
		driver.quit();
		
		/*WebDriverManager.firefoxdriver().setup();
		WebDriver driver1 = new FirefoxDriver();
		driver1.get("https://admin-demo.nopcommerce.com/login");
		driver1.manage().window().maximize();
		driver1.quit();
		
		WebDriverManager.edgedriver().setup();
		WebDriver driver2 = new EdgeDriver();
		driver2.get("https://admin-demo.nopcommerce.com/login");
		driver2.manage().window().maximize();
		driver2.quit();*/

	}

}
