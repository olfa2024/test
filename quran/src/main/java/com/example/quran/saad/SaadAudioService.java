package com.example.quran.saad;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service("saadAudioService")
public class SaadAudioService {

    private final com.example.quran.saad.SaadAudioRepository audioRepository;

    @Autowired
    public SaadAudioService(SaadAudioRepository audioRepository) {
        this.audioRepository = audioRepository;
    }

    public List<com.example.quran.saad.SaadAudio> getAllAudio() {
        return audioRepository.findAll();
    }

    public com.example.quran.saad.SaadAudio getAudioById(Long id) {
        return audioRepository.findById(id).orElse(null);
    }

    public com.example.quran.saad.SaadAudio addAudio(com.example.quran.saad.SaadAudio audio) {
        return audioRepository.save(audio);
    }

    public com.example.quran.saad.SaadAudio updateAudio(Long id, SaadAudio updatedAudio) {
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
