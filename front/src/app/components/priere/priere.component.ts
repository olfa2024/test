
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importer le module HttpClient

@Component({
  selector: 'app-priere',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './priere.component.html',
  styleUrls: ['./priere.component.css']
})
export class PriereComponent implements OnInit {
  prieres: any;

  constructor(private http: HttpClient) {} 

  ngOnInit() {
    let response = this.http.get('http://localhost:8087/api/prayer-times');
    response.subscribe((data) => {
      this.prieres = data; 
    });
  }
}
