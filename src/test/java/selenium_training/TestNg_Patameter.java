package selenium_training;

import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class TestNg_Patameter {
	
	@Parameters("a")
	@Test
	public void parameterTest(String m) {
		System.out.println("Parameter from annotation is " +m);
		
	}

}
