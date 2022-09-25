package MyTestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		         features = "src\\main\\java\\Features\\MultiDeals.feature",
                 glue= {"StepDefinitions"},
                 format= {"pretty","html:test-outout","json:report_json/cucumber.json", "junit:report_xml/cucumber.xml"},
		         dryRun = false,
		         monochrome = true,
		         strict = true
		        // tags = {"@SmokeTest", "@Ent2End"} AND
		        // tags = {"@SmokeTest, @Ent2End"} //OR
                )

public class TestRunner {

}
