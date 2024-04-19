
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule
} from '@angular/forms';
import { UtilisateurService } from '../users/utilisateur.service';

@Component({
  selector: 'app-add-utilisateur',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit {
  addUtilisateur!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UtilisateurService) { }

  ngOnInit(): void {
    this.addUtilisateur = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', [Validators.required, this.customRoleValidator]]
    });
  }

  createUser(): void {
    if (this.addUtilisateur.valid) {
    console.log('Form values:', this.addUtilisateur.value); // Débogage
    this.userService.createUser(this.addUtilisateur.value).subscribe(
      response => {
        console.log('User created successfully:', response);
        this.addUtilisateur.reset();
      },
      error => {
        console.error('Error creating user:', error);
      }
    );
  } else {
    console.log('Form is invalid. Please check the inputs.');
  }
}

  customRoleValidator(control: AbstractControl): ValidationErrors | null {
    const validRoles = ['admin', 'guest'];

    if (validRoles.includes(control.value)) {
      return null; // Valeur valide
    } else {
      return { invalidRole: true }; // Valeur invalide
    }
  }

}
