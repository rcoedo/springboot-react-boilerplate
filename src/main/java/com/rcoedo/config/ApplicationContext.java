package com.rcoedo.config;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;

import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import jdk.nashorn.api.scripting.NashornScriptEngine;

@Configuration
public class ApplicationContext {

    @Bean
    NashornScriptEngine nashorn() throws ScriptException {
        NashornScriptEngine nashorn = (NashornScriptEngine) new ScriptEngineManager().getEngineByName("nashorn");
        nashorn.eval(read("static/nashorn-polyfill.js"));
        nashorn.eval(read("static/server.js"));
        return nashorn;
    }

    Reader read(String path) {
        InputStream in = getClass().getClassLoader().getResourceAsStream(path);
        return new InputStreamReader(in);
    }
}
