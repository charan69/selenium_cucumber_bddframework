package utilities;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WaitHelper {

	public WebDriver driver;

	public WaitHelper(WebDriver driver) {
		this.driver = driver;
	}

	public void waitForElementforVisibilty(WebElement element, long waittime) {
		WebDriverWait wait = new WebDriverWait(driver, waittime);
		wait.until(ExpectedConditions.visibilityOf(element));
	}

	public void waitforElementTobeClickable(By element, int waittime) {
		WebDriverWait wait = new WebDriverWait(driver, waittime);
		wait.until(ExpectedConditions.elementToBeClickable(element));

	}

}
