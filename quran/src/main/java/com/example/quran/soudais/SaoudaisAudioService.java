package com.example.quran.soudais;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;



@Service("saoudaisAudioService")
public class SaoudaisAudioService {

    private final SoudaisAudioRepository audioRepository;

    @Autowired
    public SaoudaisAudioService(SoudaisAudioRepository audioRepository) {
        this.audioRepository = audioRepository;
    }

    public List<SoudaisAudio > getAllAudio() {
        return audioRepository.findAll();
    }

    public Optional<SoudaisAudio > getAudioById(Long id) {
        return audioRepository.findById(id);
    }

    public SoudaisAudio  addAudio(SoudaisAudio  audio) {
        return audioRepository.save(audio);
    }

    public SoudaisAudio  updateAudio(Long id, SoudaisAudio  updatedAudio) {
        if (audioRepository.existsById(id)) {
            updatedAudio.setId(id); // Make sure the ID of the updated audio matches the ID provided in the path
            return audioRepository.save(updatedAudio);
        }
        return null; // Return null if the audio with the specified ID does not exist
    }

    public void deleteAudio(Long id) {
        audioRepository.deleteById(id);
    }
}
