package com.log.backend.controller;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "classpath:caracteristicas", tags = "@LogTeste",
        glue = "com.log.backend.controller", monochrome = true, dryRun = false)
public class LogTeste {

}
