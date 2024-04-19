package com.example.quran.mishary;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service("misharyAudioService")
public class MisharyAudioService {

    private final com.example.quran.mishary.MisharyAudioRepository audioRepository;

    @Autowired
    public MisharyAudioService(MisharyAudioRepository audioRepository) {
        this.audioRepository = audioRepository;
    }

    public List<com.example.quran.mishary.MisharyAudio> getAllAudio() {
        return audioRepository.findAll();
    }

    public com.example.quran.mishary. MisharyAudio getAudioById(Long id) {
        return audioRepository.findById(id).orElse(null);
    }

    public com.example.quran.mishary.MisharyAudio addAudio(com.example.quran.mishary. MisharyAudio audio) {
        return audioRepository.save(audio);
    }

    public com.example.quran.mishary.MisharyAudio updateAudio(Long id, MisharyAudio updatedAudio) {
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
