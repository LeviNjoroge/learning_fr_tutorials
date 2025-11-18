package com.levijr.first_project_on_nov_18;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hello {

    @RequestMapping("/")
    public String sayHello() {
        return "Hello World";
    }

    @RequestMapping("/{id}")
    public String bananas(@PathVariable String id) {
        return "I love "+id;
    }

//    public static void main(){
//        System.out.println("Hello World!");
//    }

}
