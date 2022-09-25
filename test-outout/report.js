$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/MultiDeals.feature");
formatter.feature({
  "name": "Add New Deal",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add new Deal scenario with multiple information",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Julian is on Application Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiDealsSteps.Julian_is_on_Application_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Application Page Tittle is FREE CRM",
  "keyword": "When "
});
formatter.match({
  "location": "MultiDealsSteps.application_Page_Tittle_is_FREE_CRM()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Julian press the button login",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiDealsSteps.Julian_press_the_button_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Julian enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "yulian252003@yahoo.es",
        "CarePalo27"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MultiDealsSteps.Julian_enters_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Julian click on Login button.",
  "keyword": "And "
});
formatter.match({
  "location": "MultiDealsSteps.Julian_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Julian navigate to user Profile page",
  "keyword": "When "
});
formatter.match({
  "location": "MultiDealsSteps.Julian_navigate_to_user_Profile_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Go to Deals",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiDealsSteps.go_to_Deals()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on button Plus to add New Deal Form",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiDealsSteps.click_on_button_Plus_to_add_New_Deal_Form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Julian enters deal data",
  "rows": [
    {
      "cells": [
        "Title",
        "Amount",
        "Probability",
        "Commision",
        "Description",
        "Next Step"
      ]
    },
    {
      "cells": [
        "New Deal",
        "1000",
        "20",
        "3",
        "This is new Deal",
        "To Be Discussed0"
      ]
    },
    {
      "cells": [
        "Bed",
        "1000",
        "20",
        "3",
        "This is new Deal",
        "To Be Discussed1"
      ]
    },
    {
      "cells": [
        "Sofa",
        "1000",
        "20",
        "3",
        "This is new Deal",
        "To Be Discussed2"
      ]
    },
    {
      "cells": [
        "Tv",
        "1000",
        "20",
        "3",
        "This is new Deal",
        "To Be Discussed3"
      ]
    },
    {
      "cells": [
        "Stove",
        "1000",
        "20",
        "3",
        "This is new Deal",
        "To Be Discussed4"
      ]
    },
    {
      "cells": [
        "Fridge",
        "1000",
        "20",
        "3",
        "This is new Deal",
        "To Be Discussed5"
      ]
    },
    {
      "cells": [
        "Oven",
        "1000",
        "20",
        "3",
        "This is new Deal",
        "To Be Discussed6"
      ]
    },
    {
      "cells": [
        "Pan",
        "1000",
        "20",
        "3",
        "This is new Deal",
        "To Be Discussed7"
      ]
    },
    {
      "cells": [
        "Computer",
        "1000",
        "20",
        "3",
        "This is new Deal",
        "To Be Discussed8"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MultiDealsSteps.Julian_enters_deal_data(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});