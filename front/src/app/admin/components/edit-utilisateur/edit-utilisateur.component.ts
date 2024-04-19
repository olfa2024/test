
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../users/utilisateur.service';
import { Utilisateur } from '../users/utilisateur.model';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-utilisateur',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-utilisateur.component.html',
  styleUrls: ['./edit-utilisateur.component.css']
})
export class EditUtilisateurComponent   implements OnInit {

  isUpdating: boolean = false;
  editor = new FormGroup({
    postId: new FormControl({ value: '', disabled: true }),
    postName: new FormControl(''),
    postEmail: new FormControl(''),
    postPassword: new FormControl(''),
    postRole: new FormControl('')
  });

  public postId!: number;
  public postToEdit: Utilisateur = new Utilisateur(0, '', '', '', '');
  public message = '';

  constructor(private utilisateurService: UtilisateurService, private route: ActivatedRoute) {}

  ngOnInit() {
    const postIdString = this.route.snapshot.paramMap.get('id') ?? '';
    this.postId = parseInt(postIdString, 10);

    if (this.postId) {
      this.utilisateurService.getUtilisateurById(this.postId).subscribe((utilisateur: Utilisateur) => {
        if (utilisateur) {
          this.postToEdit = utilisateur;
          this.editor.patchValue({
            postId: utilisateur.id ? utilisateur.id.toString() : null,
            postName: utilisateur.name,
            postEmail: utilisateur.email,
            postPassword: utilisateur.password,
            postRole: utilisateur.role
          });
        }
      });
    }
  }
  updateUtilisateur() {
    this.isUpdating = true; // Indiquer que la mise à jour est en cours

    this.utilisateurService.updateUtilisateur(this.postToEdit.id, this.postToEdit).subscribe(
      () => {
        this.message = "Successfully edited utilisateur";
        this.isUpdating = false; // Indiquer que la mise à jour est terminée
      },
      (error) => {
        console.error("Error occurred while updating utilisateur:", error);
        this.message = "Failed to update utilisateur";
        this.isUpdating = false; // Indiquer que la mise à jour a échoué
      }
    );
  }
}


