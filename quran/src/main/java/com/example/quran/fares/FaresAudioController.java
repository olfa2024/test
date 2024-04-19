package com.example.quran.fares;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/audio/fares")
@Component("faresAudioController")
public class FaresAudioController {

    @Autowired
    private FaresAudioService audioService;

    @GetMapping
    public List<FaresAudio> getAllAudio() {
        return audioService.getAllAudio();
    }

    @GetMapping("/{id}")
    public FaresAudio getAudioById(@PathVariable Long id) {
        return audioService.getAudioById(id);
    }

    @PostMapping
    public FaresAudio addAudio(@RequestBody com.example.quran.fares.FaresAudio audio) {
        return audioService.addAudio(audio);
    }

    @PutMapping("/{id}")
    public FaresAudio updateAudio(@PathVariable Long id, @RequestBody FaresAudio updatedAudio) {
        return audioService.updateAudio(id, updatedAudio);
    }

    @DeleteMapping("/{id}")
    public void deleteAudio(@PathVariable Long id) {
        audioService.deleteAudio(id);
    }
}