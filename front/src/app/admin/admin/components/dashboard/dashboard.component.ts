import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserStorageService} from "../../../services/storage/user-storage.service";
import {Router, RouterLink} from "@angular/router";
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
  imports: [CommonModule, MatToolbarModule, MatSidenavModule, MatIconModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

}
