package me.pan_truskawka045.kartawedkarska.controller.test;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test/")
@RequiredArgsConstructor
public class TestDetailsController {

    @GetMapping("/details")
    public String getDetails() {
        return "Details";
    }


}
