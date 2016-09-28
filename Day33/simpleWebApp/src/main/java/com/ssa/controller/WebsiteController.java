package com.ssa.controller;

import javax.servlet.http.*;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;





@Controller
public class WebsiteController {
	
	@RequestMapping("/about")
    public ModelAndView about(HttpServletRequest request, ModelAndView mv) {
//        if(request.getParameter("name") != null){
  //          mv.addObject("name", request.getParameter("name"));
    //    }
        mv.setViewName("about");
        return mv;
    }
	@RequestMapping("/")
    public ModelAndView home(HttpServletRequest request, ModelAndView mv) {
        if(request.getParameter("name") != null){
            mv.addObject("name", request.getParameter("name"));
        }
        mv.setViewName("home");
        return mv;
	}
}
	