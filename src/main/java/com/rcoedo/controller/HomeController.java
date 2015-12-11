package com.rcoedo.controller;

import javax.script.ScriptException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import jdk.nashorn.api.scripting.NashornScriptEngine;

@Controller
public class HomeController {

    private NashornScriptEngine nashorn;
    private String bundle;

    @Autowired
    public HomeController(NashornScriptEngine nashorn, @Value("${js.bundle}") String bundle) {
        this.nashorn = nashorn;
        this.bundle = bundle;
    }

    @RequestMapping("/")
    public String nashorn(Model model) throws ScriptException {
        model.addAttribute("bundle", bundle);
        model.addAttribute("data", "window.__INITIAL_STATE__ = {texts: []}");
        model.addAttribute("html", render("'/'"));
        return "layout";
    }

    @RequestMapping("/about")
    public String testing(Model model) throws ScriptException {
        model.addAttribute("bundle", bundle);
        model.addAttribute("data", "window.__INITIAL_STATE__ = {texts: []}");
        model.addAttribute("html", render("'/testing'"));
        return "layout";
    }

    Object render(String url) throws ScriptException {
        return nashorn.eval("if (window.env__SSR_ENABLED__) { window.serverSideRender(" + url + ", {texts: []}) }");
    }
}
