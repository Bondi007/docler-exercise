$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/DoclerTestsCucumber.feature");
formatter.feature({
  "line": 1,
  "name": "Automated UI testing of http://uitest.duodecadits.com",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "CTC1 - Check logo and title - Form Page",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc1---check-logo-and-title---form-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "The user opens the website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user clicks on Form button in the upper Menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user is navigated to the Form page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Page title is UI Testing Site",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Company logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The user leaves the website",
  "keyword": "And "
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_opens_the_website()"
});
formatter.result({
  "duration": 4356884778,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Form_button_in_the_upper_Menu()"
});
formatter.result({
  "duration": 430179051,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_is_navigated_to_the_Form_page()"
});
formatter.result({
  "duration": 29094002,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.page_title_is_UI_Testing_Site()"
});
formatter.result({
  "duration": 9781690,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.company_logo_is_displayed()"
});
formatter.result({
  "duration": 54989986,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_leaves_the_website()"
});
formatter.result({
  "duration": 577954266,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "CTC2 - Check logo and title - Form Page - after submitting the name",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc2---check-logo-and-title---form-page---after-submitting-the-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "The user opens the website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "The user clicks on Form button in the upper Menu",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The user is navigated to the Form page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "The user types \"\u003cusername\u003e\" in the input box",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "The user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Page title is UI Testing Site",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Company logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "The user leaves the website",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc2---check-logo-and-title---form-page---after-submitting-the-name;",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 21,
      "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc2---check-logo-and-title---form-page---after-submitting-the-name;;1"
    },
    {
      "cells": [
        "Test"
      ],
      "line": 22,
      "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc2---check-logo-and-title---form-page---after-submitting-the-name;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "CTC2 - Check logo and title - Form Page - after submitting the name",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc2---check-logo-and-title---form-page---after-submitting-the-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "The user opens the website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "The user clicks on Form button in the upper Menu",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The user is navigated to the Form page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "The user types \"Test\" in the input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "The user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Page title is UI Testing Site",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Company logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "The user leaves the website",
  "keyword": "And "
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_opens_the_website()"
});
formatter.result({
  "duration": 3976849062,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Form_button_in_the_upper_Menu()"
});
formatter.result({
  "duration": 423465313,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_is_navigated_to_the_Form_page()"
});
formatter.result({
  "duration": 11781999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 16
    }
  ],
  "location": "DoclerTestsCucumberSD.the_user_types_in_the_input_box(String)"
});
formatter.result({
  "duration": 177436737,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 241415757,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.page_title_is_UI_Testing_Site()"
});
formatter.result({
  "duration": 13669766,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.company_logo_is_displayed()"
});
formatter.result({
  "duration": 58414669,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_leaves_the_website()"
});
formatter.result({
  "duration": 562431709,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "CTC3 - Check logo and title - Home Page",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc3---check-logo-and-title---home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "The user opens the website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The user clicks on Home button in the upper Menu",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The user is navigated to the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Page title is UI Testing Site",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Company logo is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "The user leaves the website",
  "keyword": "And "
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_opens_the_website()"
});
formatter.result({
  "duration": 3074278781,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Home_button_in_the_upper_Menu()"
});
formatter.result({
  "duration": 79111604,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_is_navigated_to_the_Home_page()"
});
formatter.result({
  "duration": 129265825,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.page_title_is_UI_Testing_Site()"
});
formatter.result({
  "duration": 9348095,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.company_logo_is_displayed()"
});
formatter.result({
  "duration": 53972371,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_leaves_the_website()"
});
formatter.result({
  "duration": 564105465,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "CTC4 - Test UI Testing Page - Check if it navigates to Home page",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc4---test-ui-testing-page---check-if-it-navigates-to-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "The user opens the website",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "The user clicks on UI Testing button in the upper Menu",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "The user is navigated to the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "The user leaves the website",
  "keyword": "And "
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_opens_the_website()"
});
formatter.result({
  "duration": 3217901850,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_UI_Testing_button_in_the_upper_Menu()"
});
formatter.result({
  "duration": 341080378,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_is_navigated_to_the_Home_page()"
});
formatter.result({
  "duration": 12411907,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_leaves_the_website()"
});
formatter.result({
  "duration": 563640043,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "CTC5 - Test Error Page",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc5---test-error-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "The user opens the website",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "The user clicks on Error button in the upper Menu",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "The user is navigated to the Error page",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "The user gets Error File not found message",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "The user leaves the website",
  "keyword": "And "
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_opens_the_website()"
});
formatter.result({
  "duration": 3227569390,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Error_button_in_the_upper_Menu()"
});
formatter.result({
  "duration": 396770009,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_is_navigated_to_the_Error_page()"
});
formatter.result({
  "duration": 13122983,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_gets_Error_File_not_found_message()"
});
formatter.result({
  "duration": 14141715,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_leaves_the_website()"
});
formatter.result({
  "duration": 561312331,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "CTC6 - Test Home Page - Check if Home menu turns to active status",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc6---test-home-page---check-if-home-menu-turns-to-active-status",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "The user opens the website",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "The user clicks on Home button in the upper Menu",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "The user is navigated to the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Home menu turns to active status",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "The user leaves the website",
  "keyword": "And "
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_opens_the_website()"
});
formatter.result({
  "duration": 3246138008,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Home_button_in_the_upper_Menu()"
});
formatter.result({
  "duration": 204128039,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_is_navigated_to_the_Home_page()"
});
formatter.result({
  "duration": 10759379,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.home_menu_turns_to_active_status()"
});
formatter.result({
  "duration": 27207710,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_leaves_the_website()"
});
formatter.result({
  "duration": 561235148,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "CTC7 - Test Home Page - Check if the correct header and paragraph are displayed",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc7---test-home-page---check-if-the-correct-header-and-paragraph-are-displayed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "The user opens the website",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "The user clicks on Home button in the upper Menu",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "The user is navigated to the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "Correct Header and Paragraph is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "The user leaves the website",
  "keyword": "And "
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_opens_the_website()"
});
formatter.result({
  "duration": 3231538956,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Home_button_in_the_upper_Menu()"
});
formatter.result({
  "duration": 161860072,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_is_navigated_to_the_Home_page()"
});
formatter.result({
  "duration": 15003864,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.correct_Header_and_Paragraph_is_displayed()"
});
formatter.result({
  "duration": 58469405,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_leaves_the_website()"
});
formatter.result({
  "duration": 560533949,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "CTC8 - Test Form Page - Check if Input box and Submit button are displayed",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc8---test-form-page---check-if-input-box-and-submit-button-are-displayed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "The user opens the website",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "The user clicks on Form button in the upper Menu",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "The user is navigated to the Form page",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "The input form and submit button is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "The user leaves the website",
  "keyword": "And "
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_opens_the_website()"
});
formatter.result({
  "duration": 3091474708,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Form_button_in_the_upper_Menu()"
});
formatter.result({
  "duration": 404987658,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_is_navigated_to_the_Form_page()"
});
formatter.result({
  "duration": 12973274,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_input_form_and_submit_button_is_displayed()"
});
formatter.result({
  "duration": 112008493,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_leaves_the_website()"
});
formatter.result({
  "duration": 561038301,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "CTC9 - Test Form Page - Check if Form menu turns to active status",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc9---test-form-page---check-if-form-menu-turns-to-active-status",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "The user opens the website",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "The user clicks on Form button in the upper Menu",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "The user is navigated to the Form page",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Form menu turns to active status",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "The user leaves the website",
  "keyword": "And "
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_opens_the_website()"
});
formatter.result({
  "duration": 3257139615,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Form_button_in_the_upper_Menu()"
});
formatter.result({
  "duration": 540262319,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_is_navigated_to_the_Form_page()"
});
formatter.result({
  "duration": 10167462,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.form_menu_turns_to_active_status()"
});
formatter.result({
  "duration": 38099836,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_leaves_the_website()"
});
formatter.result({
  "duration": 575673465,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 73,
  "name": "CTC10 - Test Form Page - Test submitting different names",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc10---test-form-page---test-submitting-different-names",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "The user opens the website",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "The user clicks on Form button in the upper Menu",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "The user is navigated to the Form page",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "The user types \"\u003cusername\u003e\" in the input box",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "The user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Page displays Hello \"\u003cusername\u003e\"! message",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "The user leaves the website",
  "keyword": "And "
});
formatter.examples({
  "line": 81,
  "name": "",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc10---test-form-page---test-submitting-different-names;",
  "rows": [
    {
      "cells": [
        "username"
      ],
      "line": 82,
      "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc10---test-form-page---test-submitting-different-names;;1"
    },
    {
      "cells": [
        "John"
      ],
      "line": 83,
      "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc10---test-form-page---test-submitting-different-names;;2"
    },
    {
      "cells": [
        "Sophia"
      ],
      "line": 84,
      "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc10---test-form-page---test-submitting-different-names;;3"
    },
    {
      "cells": [
        "Charlie"
      ],
      "line": 85,
      "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc10---test-form-page---test-submitting-different-names;;4"
    },
    {
      "cells": [
        "Emily"
      ],
      "line": 86,
      "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc10---test-form-page---test-submitting-different-names;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 83,
  "name": "CTC10 - Test Form Page - Test submitting different names",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc10---test-form-page---test-submitting-different-names;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "The user opens the website",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "The user clicks on Form button in the upper Menu",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "The user is navigated to the Form page",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "The user types \"John\" in the input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "The user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Page displays Hello \"John\"! message",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "The user leaves the website",
  "keyword": "And "
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_opens_the_website()"
});
formatter.result({
  "duration": 3120210216,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Form_button_in_the_upper_Menu()"
});
formatter.result({
  "duration": 541233601,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_is_navigated_to_the_Form_page()"
});
formatter.result({
  "duration": 9251114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 16
    }
  ],
  "location": "DoclerTestsCucumberSD.the_user_types_in_the_input_box(String)"
});
formatter.result({
  "duration": 156937224,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 255991009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 21
    }
  ],
  "location": "DoclerTestsCucumberSD.page_displays_Hello_message(String)"
});
formatter.result({
  "duration": 77373848,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_leaves_the_website()"
});
formatter.result({
  "duration": 558506482,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "CTC10 - Test Form Page - Test submitting different names",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc10---test-form-page---test-submitting-different-names;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "The user opens the website",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "The user clicks on Form button in the upper Menu",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "The user is navigated to the Form page",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "The user types \"Sophia\" in the input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "The user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Page displays Hello \"Sophia\"! message",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "The user leaves the website",
  "keyword": "And "
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_opens_the_website()"
});
formatter.result({
  "duration": 3444853910,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Form_button_in_the_upper_Menu()"
});
formatter.result({
  "duration": 548155509,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_is_navigated_to_the_Form_page()"
});
formatter.result({
  "duration": 7269061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sophia",
      "offset": 16
    }
  ],
  "location": "DoclerTestsCucumberSD.the_user_types_in_the_input_box(String)"
});
formatter.result({
  "duration": 171855893,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 242291193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sophia",
      "offset": 21
    }
  ],
  "location": "DoclerTestsCucumberSD.page_displays_Hello_message(String)"
});
formatter.result({
  "duration": 88988368,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_leaves_the_website()"
});
formatter.result({
  "duration": 561336061,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "CTC10 - Test Form Page - Test submitting different names",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc10---test-form-page---test-submitting-different-names;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "The user opens the website",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "The user clicks on Form button in the upper Menu",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "The user is navigated to the Form page",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "The user types \"Charlie\" in the input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "The user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Page displays Hello \"Charlie\"! message",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "The user leaves the website",
  "keyword": "And "
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_opens_the_website()"
});
formatter.result({
  "duration": 3291826267,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Form_button_in_the_upper_Menu()"
});
formatter.result({
  "duration": 689461114,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_is_navigated_to_the_Form_page()"
});
formatter.result({
  "duration": 11816136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Charlie",
      "offset": 16
    }
  ],
  "location": "DoclerTestsCucumberSD.the_user_types_in_the_input_box(String)"
});
formatter.result({
  "duration": 178358605,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 240017958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Charlie",
      "offset": 21
    }
  ],
  "location": "DoclerTestsCucumberSD.page_displays_Hello_message(String)"
});
formatter.result({
  "duration": 89678158,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_leaves_the_website()"
});
formatter.result({
  "duration": 560110183,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "CTC10 - Test Form Page - Test submitting different names",
  "description": "",
  "id": "automated-ui-testing-of-http://uitest.duodecadits.com;ctc10---test-form-page---test-submitting-different-names;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "The user opens the website",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "The user clicks on Form button in the upper Menu",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "The user is navigated to the Form page",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "The user types \"Emily\" in the input box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "The user clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Page displays Hello \"Emily\"! message",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "The user leaves the website",
  "keyword": "And "
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_opens_the_website()"
});
formatter.result({
  "duration": 3575508418,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Form_button_in_the_upper_Menu()"
});
formatter.result({
  "duration": 543154240,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_is_navigated_to_the_Form_page()"
});
formatter.result({
  "duration": 16349417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emily",
      "offset": 16
    }
  ],
  "location": "DoclerTestsCucumberSD.the_user_types_in_the_input_box(String)"
});
formatter.result({
  "duration": 171206418,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 106678558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emily",
      "offset": 21
    }
  ],
  "location": "DoclerTestsCucumberSD.page_displays_Hello_message(String)"
});
formatter.result({
  "duration": 284393657,
  "status": "passed"
});
formatter.match({
  "location": "DoclerTestsCucumberSD.the_user_leaves_the_website()"
});
formatter.result({
  "duration": 584884188,
  "status": "passed"
});
});