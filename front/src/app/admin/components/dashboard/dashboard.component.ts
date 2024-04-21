import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserStorageService} from "../../../services/storage/user-storage.service";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {  ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd} from '@angular/router';
import {SidebarService} from "./sidebar.service";
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatSidenavModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  constructor(private router: Router) { }
  onLogout() {
    // Clear the token from local storage
    localStorage.removeItem('loginToken');
    // Redirect the user to the login page or any other appropriate page
    this.router.navigateByUrl('/login');
  }

}
