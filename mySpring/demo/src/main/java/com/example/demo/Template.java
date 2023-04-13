package com.example.demo;
import java.io.File;

// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.bind.annotation.RequestParam;
// @RequestParam(defaultValue = "World", required = false) String name,
import org.springframework.stereotype.Controller;
// import org.springframework.stereotype.Service;

// import org.springframework.data.mongodb.core.MongoTemplate;

// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.bind.annotation.Control;

import org.springframework.ui.Model;

// @RestController
@Controller
// @Service
public class Template {


    // private MongoTemplate mongoTemplate;
    // @GetMapping("/")
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String hello(Model model) {
        

        String currentDir = System.getProperty("user.dir");

        // String imagePath = currentDir + "/backend/images/upload";
    //    System.out.println(imagePath);
        System.out.println("Inside handler");
        // model.addAttribute("name", "Hello World");
        String pathDir = currentDir+"/backend/images/uploads/_imgaes_img_mom.jpg";
        System.out.println("Again");
        File myUserPhoto = new File(pathDir);
        // String[] filenames = myUserPhoto.list();
        System.out.println(myUserPhoto);
        

        return "index";
    }
}
