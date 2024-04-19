package com.example.quran.abubakr;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service("abubakrAudioService")
public class AbubakrAudioService {

    private final  com.example.quran.abubakr.AbubakrAudioRepository audioRepository;

    @Autowired
    public AbubakrAudioService(AbubakrAudioRepository audioRepository) {
        this.audioRepository = audioRepository;
    }

    public List< com.example.quran.abubakr.AbubakrAudio > getAllAudio() {
        return audioRepository.findAll();
    }

    public  com.example.quran.abubakr.AbubakrAudio  getAudioById(Long id) {
        return audioRepository.findById(id).orElse(null);
    }

    public  com.example.quran.abubakr.AbubakrAudio  addAudio( com.example.quran.abubakr.AbubakrAudio  audio) {
        return audioRepository.save(audio);
    }

    public  com.example.quran.abubakr.AbubakrAudio  updateAudio(Long id, AbubakrAudio  updatedAudio) {
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
