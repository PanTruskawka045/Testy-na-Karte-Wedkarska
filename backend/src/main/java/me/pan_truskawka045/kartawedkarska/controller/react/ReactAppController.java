package me.pan_truskawka045.kartawedkarska.controller.react;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactAppController {

    //Combination of ChatGPT and code from stackoverflow, not sure how it works but it works
    @RequestMapping(value = {"/", "/{x:[\\w\\-]+}", "/{x:^(?!api$|assets$).*$}/*/{y:[\\w\\-]+}", "/error"})
    public String getIndex(HttpServletRequest request) {
        return "/index.html";
    }

}
