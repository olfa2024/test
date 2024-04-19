package com.example.quran.salah;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service("salahAudioService")
public class SalahAudioService {

    private final com.example.quran.salah.SalahAudioRepository audioRepository;

    @Autowired
    public SalahAudioService(SalahAudioRepository audioRepository) {
        this.audioRepository = audioRepository;
    }

    public List<com.example.quran.salah.SalahAudio> getAllAudio() {
        return audioRepository.findAll();
    }

    public com.example.quran.salah.SalahAudio getAudioById(Long id) {
        return audioRepository.findById(id).orElse(null);
    }

    public com.example.quran.salah.SalahAudio addAudio(com.example.quran.salah.SalahAudio audio) {
        return audioRepository.save(audio);
    }

    public com.example.quran.salah.SalahAudio updateAudio(Long id, SalahAudio updatedAudio) {
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
