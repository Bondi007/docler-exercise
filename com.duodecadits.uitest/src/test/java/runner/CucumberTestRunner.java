package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"classpath:features/DoclerTestsCucumber.feature"},
		glue={"stepdefinition"},
		plugin={"html:test-output/cucumber-html-report"})

public class CucumberTestRunner {
   
   }

