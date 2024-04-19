package com.example.quran.abdelbaset;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AbdelbasetAudioService {

    private final com.example.quran.abdelbaset.AbdelbasetAudioRepository audioRepository;

    @Autowired
    public AbdelbasetAudioService(AbdelbasetAudioRepository audioRepository) {
        this.audioRepository = audioRepository;
    }

    public List<AbdelbasetAudio> getAllAudio() {
        return audioRepository.findAll();
    }

    public AbdelbasetAudio getAudioById(Long id) {
        return audioRepository.findById(id).orElse(null);
    }

    public AbdelbasetAudio addAudio(AbdelbasetAudio audio) {
        return audioRepository.save(audio);
    }

    public AbdelbasetAudio updateAudio(Long id, AbdelbasetAudio updatedAudio) {
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
