package com.example.quran.saad;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/audio/saad")
@Component("saadAudioController")

public class SaadAudioController {

    @Autowired
    private SaadAudioService audioService;

    @GetMapping
    public List<SaadAudio> getAllAudio() {
        return audioService.getAllAudio();
    }

    @GetMapping("/{id}")
    public SaadAudio getAudioById(@PathVariable Long id) {
        return audioService.getAudioById(id);
    }

    @PostMapping
    public SaadAudio addAudio(@RequestBody SaadAudio audio) {
        return audioService.addAudio(audio);
    }

    @PutMapping("/{id}")
    public SaadAudio updateAudio(@PathVariable Long id, @RequestBody SaadAudio updatedAudio) {
        return audioService.updateAudio(id, updatedAudio);
    }

    @DeleteMapping("/{id}")
    public void deleteAudio(@PathVariable Long id) {
        audioService.deleteAudio(id);
    }
}