package com.example.quran.maher;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AudioService {

    private final AudioRepository audioRepository;

    @Autowired
    public AudioService(AudioRepository audioRepository) {
        this.audioRepository = audioRepository;
    }

    public List<Audio> getAllAudio() {
        return audioRepository.findAll();
    }

    public Audio getAudioById(Long id) {
        return audioRepository.findById(id).orElse(null);
    }

    public Audio addAudio(Audio audio) {
        return audioRepository.save(audio);
    }

    public Audio updateAudio(Long id, Audio updatedAudio) {
        if (audioRepository.existsById(id)) {
            updatedAudio.setId(id); // Assurez-vous que l'ID de l'audio mis à jour correspond à l'ID fourni dans le chemin
            return audioRepository.save(updatedAudio);
        }
        return null; // Retourne null si l'audio avec l'ID spécifié n'existe pas
    }

    public void deleteAudio(Long id) {
        audioRepository.deleteById(id);
    }
}
