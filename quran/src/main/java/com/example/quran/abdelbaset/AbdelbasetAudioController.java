package com.example.quran.abdelbaset;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/audio/abdelbaset")
@Component("abdelbasetAudioController")
public class AbdelbasetAudioController {

    @Autowired
    private AbdelbasetAudioService audioService;

    @GetMapping
    public List<AbdelbasetAudio> getAllAudio() {
        return audioService.getAllAudio();
    }

    @GetMapping("/{id}")
    public AbdelbasetAudio getAudioById(@PathVariable Long id) {
        return audioService.getAudioById(id);
    }

    @PostMapping
    public AbdelbasetAudio addAudio(@RequestBody AbdelbasetAudio audio) {
        return audioService.addAudio(audio);
    }

    @PutMapping("/{id}")
    public AbdelbasetAudio updateAudio(@PathVariable Long id, @RequestBody AbdelbasetAudio updatedAudio) {
        return audioService.updateAudio(id, updatedAudio);
    }

    @DeleteMapping("/{id}")
    public void deleteAudio(@PathVariable Long id) {
        audioService.deleteAudio(id);
    }
}
