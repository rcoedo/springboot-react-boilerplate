package com.rcoedo.controller;

import javax.script.ScriptException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

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
    public String nashorn(Model model) throws ScriptException {
        model.addAttribute("data", "window.__INITIAL_STATE__ = {texts: []}");
        model.addAttribute("html", nashorn.eval("window.App({texts: []})"));
        return "layout";
    }
}
