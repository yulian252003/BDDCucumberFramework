package MyTestRunner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(
		//features = "src\\main\\java\\Features\\MultiDeals.feature", windows
		         features = "/home/julian/Documents/workspace-spring-tool-suite-4-4.16.0.RELEASE/BDDCucumberFramework/src/main/java/Features/MultiDeals.feature",
                 glue= {"StepDefinitions"},
                 plugin = {"pretty", "html:target/cucumber.html"},
		         dryRun = false,
		         monochrome = true,
		         strict = true
		        // tags = {"@SmokeTest", "@Ent2End"} AND
		        // tags = {"@SmokeTest, @Ent2End"} //OR
                )

public class TestRunner {

}
