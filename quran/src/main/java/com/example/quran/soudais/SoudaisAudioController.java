package com.example.quran.soudais;
import com.example.quran.maher.Audio;
import com.example.quran.maher.AudioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;


import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/audio/soudais")
@Component("soudaisAudioController")

public class SoudaisAudioController {

    @Autowired

    private AudioService audioService;

    @GetMapping
    public List<com.example.quran.maher.Audio> getAllAudio() {
        return audioService.getAllAudio();
    }

    @GetMapping("/{id}")
    public com.example.quran.maher.Audio getAudioById(@PathVariable Long id) {
        return audioService.getAudioById(id);
    }

    @PostMapping
    public com.example.quran.maher.Audio addAudio(@RequestBody com.example.quran.maher.Audio audio) {
        return audioService.addAudio(audio);
    }

    @PutMapping("/{id}")
    public com.example.quran.maher.Audio updateAudio(@PathVariable Long id, @RequestBody Audio updatedAudio) {
        return audioService.updateAudio(id, updatedAudio);
    }

    @DeleteMapping("/{id}")
    public void deleteAudio(@PathVariable Long id) {
        audioService.deleteAudio(id);
    }
}