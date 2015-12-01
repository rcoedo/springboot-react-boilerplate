package com.rcoedo.controller;

import javax.script.ScriptException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import jdk.nashorn.api.scripting.NashornScriptEngine;

@Controller
public class HomeController {

    private NashornScriptEngine nashorn;

    @Autowired
    public HomeController(NashornScriptEngine nashorn) {
        this.nashorn = nashorn;
    }

    @RequestMapping("/")
    public String home() {
        return "home";
    }

    @RequestMapping("/nashorn")
    @ResponseBody
    public String nashorn() throws ScriptException {
        String data = "{texts: []}";
        return (String) nashorn.eval("window.App(" + data + ")");
    }
}
