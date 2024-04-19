package com.example.quran.saoud;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;



@Service("saoudAudioService")
public class SaoudAudioService {

    private final com.example.quran.saoud.SaoudAudioRepository audioRepository;

    @Autowired
    public SaoudAudioService(SaoudAudioRepository audioRepository) {
        this.audioRepository = audioRepository;
    }

    public List<com.example.quran.saoud.SaoudAudio> getAllAudio() {
        return audioRepository.findAll();
    }

    public com.example.quran.saoud.SaoudAudio getAudioById(Long id) {
        return audioRepository.findById(id).orElse(null);
    }

    public com.example.quran.saoud.SaoudAudio addAudio(com.example.quran.saoud.SaoudAudio audio) {
        return audioRepository.save(audio);
    }

    public com.example.quran.saoud.SaoudAudio updateAudio(Long id, SaoudAudio updatedAudio) {
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
