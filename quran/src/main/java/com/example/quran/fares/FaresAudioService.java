package com.example.quran.fares;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service("faresAudioService")
public class FaresAudioService {

    private final com.example.quran.fares.FaresAudioRepository audioRepository;

    @Autowired
    public FaresAudioService(FaresAudioRepository audioRepository) {
        this.audioRepository = audioRepository;
    }

    public List<com.example.quran.fares.FaresAudio> getAllAudio() {
        return audioRepository.findAll();
    }

    public com.example.quran.fares.FaresAudio getAudioById(Long id) {
        return audioRepository.findById(id).orElse(null);
    }

    public com.example.quran.fares.FaresAudio addAudio(com.example.quran.fares.FaresAudio audio) {
        return audioRepository.save(audio);
    }

    public com.example.quran.fares.FaresAudio updateAudio(Long id, FaresAudio updatedAudio) {
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
