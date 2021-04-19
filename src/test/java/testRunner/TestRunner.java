package testRunner;

import java.io.File;
import java.io.FileReader;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.vimalselvam.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {".//Features/Login.feature",".//Features/Customers.feature" }, 
		glue = "stepDefinitions",
		dryRun = false, 
		monochrome = true,
		plugin = {"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html","pretty","html:test-output"},
		tags = {"@sanity,@regression"})

public class TestRunner {
	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File(".//config/extent-config.xml"));
		Reporter.setSystemInfo("User", System.getProperty("user.name"));
		Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
		Reporter.setSystemInfo("Machine", "Windows 10" + " 64-Bit");
		Reporter.setSystemInfo("Selenium", "3.141");
		Reporter.setSystemInfo("Maven", "3.6.3");
		Reporter.setSystemInfo("Java Version", "1.8.0_271");
		Reporter.assignAuthor("Charan Budama");

	}

}
