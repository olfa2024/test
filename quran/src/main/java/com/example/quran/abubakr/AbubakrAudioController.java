package com.example.quran.abubakr;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/audio/abubaker")
@Component("abubakrAudioController")
public class AbubakrAudioController {

    @Autowired
    private AbubakrAudioService audioService;

    @GetMapping
    public List<AbubakrAudio > getAllAudio() {
        return audioService.getAllAudio();
    }

    @GetMapping("/{id}")
    public AbubakrAudio  getAudioById(@PathVariable Long id) {
        return audioService.getAudioById(id);
    }

    @PostMapping
    public AbubakrAudio  addAudio(@RequestBody AbubakrAudio  audio) {
        return audioService.addAudio(audio);
    }

    @PutMapping("/{id}")
    public AbubakrAudio  updateAudio(@PathVariable Long id, @RequestBody AbubakrAudio  updatedAudio) {
        return audioService.updateAudio(id, updatedAudio);
    }

    @DeleteMapping("/{id}")
    public void deleteAudio(@PathVariable Long id) {
        audioService.deleteAudio(id);
    }
}