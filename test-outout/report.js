$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/julian/Documents/workspace-spring-tool-suite-4-4.16.0.RELEASE/BDDCucumberFramework/src/main/java/Features/MultiDeals.feature");
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
  "error_message": "java.lang.ExceptionInInitializerError\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:807)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:76)\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:48)\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:39)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:78)\n\tat cucumber.api.TestStep.run(TestStep.java:61)\n\tat cucumber.api.TestCase.run(TestCase.java:28)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:99)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:108)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\n\tat ✽.Julian is on Application Home Page(/home/julian/Documents/workspace-spring-tool-suite-4-4.16.0.RELEASE/BDDCucumberFramework/src/main/java/Features/MultiDeals.feature:5)\nCaused by: java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @69379752\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:354)\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:297)\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:178)\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:172)\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:807)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:76)\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:48)\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:39)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:78)\n\tat cucumber.api.TestStep.run(TestStep.java:61)\n\tat cucumber.api.TestCase.run(TestCase.java:28)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:99)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:108)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\n",
  "status": "failed"
});
formatter.step({
  "name": "Application Page Tittle is FREE CRM",
  "keyword": "When "
});
formatter.match({
  "location": "MultiDealsSteps.application_Page_Tittle_is_FREE_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Julian press the button login",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiDealsSteps.Julian_press_the_button_login()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Julian click on Login button.",
  "keyword": "And "
});
formatter.match({
  "location": "MultiDealsSteps.Julian_click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Julian navigate to user Profile page",
  "keyword": "When "
});
formatter.match({
  "location": "MultiDealsSteps.Julian_navigate_to_user_Profile_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Go to Deals",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiDealsSteps.go_to_Deals()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on button Plus to add New Deal Form",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiDealsSteps.click_on_button_Plus_to_add_New_Deal_Form()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});