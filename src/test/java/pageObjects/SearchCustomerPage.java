package pageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.How;

import utilities.WaitHelper;

public class SearchCustomerPage {
	
	public WebDriver ldriver;
	WaitHelper waithelper;
	
	public SearchCustomerPage(WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(ldriver, this);
		waithelper = new WaitHelper(ldriver);
	}
	
	//Elements adding here
	
	@FindBy(how = How.ID, using = "SearchEmail")
    WebElement txtEmail;

    @FindBy(how = How.ID, using = "SearchFirstName")
    WebElement txtFirstName;

    @FindBy(how = How.ID, using = "SearchLastName")
    @CacheLookup
    WebElement txtLastName;

    @FindBy(how = How.ID, using = "search-customers")
    @CacheLookup
    WebElement btnSearch;

    @FindBy(how = How.XPATH, using = "//table[@role='grid']")
    @CacheLookup
    WebElement tblSearchResults;

    @FindBy(how = How.XPATH, using = "//table[@id='customers-grid']")
    WebElement table;

    @FindBy(how = How.XPATH, using = "//table[@id='customers-grid']//tbody/tr")
    List<WebElement> tableRows;

    @FindBy(how = How.XPATH, using = "//table[@id='customers-grid']//tbody/tr/td")
    List<WebElement> tableColumns;
    
    public void setEmail(String email) {
    	waithelper.waitForElementforVisibilty(txtEmail, 30);
    	txtEmail.clear();
    	txtEmail.sendKeys(email);
    	
    }
    public void setFirstName(String fname) {

        txtFirstName.clear();
        txtFirstName.sendKeys(fname);
    }

    public void setLastName(String lname) {

        txtLastName.clear();
        txtLastName.sendKeys(lname);
    }
    
    public void clickSearch() {
        btnSearch.click();

    }
    
    public int getTotalRows() {
    	return(tableRows.size());
    }
    public int getTotalColumns() {
    	return(tableColumns.size());
    }

    public  boolean searchByEmailID(String email) {
    	
    	boolean emailFlag = false;
    	
    	for(int i=1;i<=getTotalRows();i++) {
    		String emailId = table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr["+ i +"]/td[2]")).getText();
    		System.out.println("Email id is" +emailId);
    		if(emailId.equals(email)) {
    			emailFlag = true;
    			break;
    		}
    	}
		return emailFlag;
    	
    }
    
    public boolean searchByFname(String Fname) {
    	boolean fnameFlag = false;
    	
    	for(int i=1;i<=getTotalRows();i++) {
    		String names = table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr[" + i +"]/td[3]")).getText();
    		String fname[]= names.split(" ");
    		System.out.println("First name is" +fname[0]);
    		if(fname[0].equals(Fname)) {
    			fnameFlag = true;
    			break;
    		}
    	}
		return fnameFlag;
    }
    public boolean searchByLname(String Lname) {
    	boolean lnameFlag = false;
    	
    	for(int i=1;i<=getTotalRows();i++) {
    		String names = table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr[" + i +"]/td[3]")).getText();
    		String lname[]= names.split(" ");
    		System.out.println("last name is" +lname[1]);
    		if(lname[1].contains(Lname)) {
    			lnameFlag = true;
    			break;
    		}
    	}
		return lnameFlag;
    }
    	
    }

