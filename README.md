# Project: Docler Homework
This project is about automated UI testing (with Selenium) of http://uitest.duodecadits.com based on the requirements.

## Getting Started
### Prerequisites

The following applications are installed:
* Eclipse IDE (or other IDE)
* Java 8
* Maven
* Cucumber
* TestNG
* Selenium
* Chrome

### Traceability Matrix

Please find the Requirements Traceability Matrix in the root folder beside README.MD: *Traceability_Matrix_Docler.xlsx*

## Technical structure of the tests:

### Cucumber:

Location of the feature file:
```
src/test/java -> features package -> DoclerTestsCucumber.feature
```

Location of step definitions:
```
src/test/java/stepdefinition package -> DoclerTestsCucumberSD.java
```

Location of Cucumber Test Runner:
```
src/test/java/runner package -> CucumberTestRunner.java
```

#### Running the tests

Run CucumberTestRunner.java with JUnit

*(Note: There is a possibility to execute Cucumber tests parallel with the help of 'cucumber-jvm-parallel-plugin' but it is not part of this project)*

#### Execution log (HTML format) is located here: 
```
test-output/cucumber-html-report
```


### TestNG:

Location of TestNG Test Cases:
```
src/test/java/testngtestcases package -> TestNGTestCase1.java
src/test/java/testngtestcases package -> TestNGTestCase2.java
src/test/java/testngtestcases package -> TestNGTestCase3.java
src/test/java/testngtestcases package -> TestNGTestCase4.java
src/test/java/testngtestcases package -> TestNGTestCase5.java
src/test/java/testngtestcases package -> TestNGTestCase6.java
```

#### Running the tests - single thread:

* Open **TestNGsuite.xml**
* Change the value of "parallel" attribute to "none"
* Run **TestNGsuite.xml** with TestNG


#### Running the tests - multiple thread:

* Open **TestNGsuite.xml**
* Change the value of "parallel" attribute to the number of thread you want to execute with
* Run **TestNGsuite.xml** with TestNG

(Note: You can change the verbosity by modifying "verbose" attribute in TestNGsuite.xml. "1" is less verbose, "10" is debug log level)


#### Execution log (HTML format) is located here: 

```
test-output folder (open index.html)
```

## Author
* **Tamás Bondár**

