import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NidamComponent } from './nidam/nidam.component';
import { MawakitComponent } from './mawakit/mawakit.component';

import { DoaaComponent } from './doaa/doaa.component';
import { ConseilComponent } from './conseil/conseil.component';

import { DonneurComponent } from './donneur/donneur.component';
import { PriereComponent } from './components/priere/priere.component';
import {RegisterComponent} from "./register/register.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {ListeComponent} from "./liste/liste.component";
import {DonnationComponent} from "./components/donnation/donnation.component";
import {MaherComponent} from "./layouts/maher/maher.component";
import {FaresComponent} from "./layouts/fares/fares.component";
import {AbubakrComponent} from "./layouts/abubakr/abubakr.component";
import {SaoudComponent} from "./layouts/saoud/saoud.component";
import {SalahComponent} from "./layouts/salah/salah.component";
import {MisharyComponent} from "./layouts/mishary/mishary.component";
import {AbdelbasetComponent} from "./layouts/abdelbaset/abdelbaset.component";
import {SoudaisComponent} from "./layouts/soudais/soudais.component";
import {SaadComponent} from "./layouts/saad/saad.component";
import {DashboardComponent} from "./admin/components/dashboard/dashboard.component";
import {DourousComponent} from "./dourous/dourous.component";
import {UsersComponent} from "./admin/components/users/users.component";


const routes: Routes = [
  { path: '', component: AccueilComponent, pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nidam', component: NidamComponent },
  { path: 'mawakit', component: MawakitComponent },

  { path: 'doaa', component: DoaaComponent },
  { path: 'conseil', component: ConseilComponent },

   { path: 'donneur', component:  DonneurComponent  },
   { path: 'priere', component: PriereComponent  },
  { path: 'register', component: RegisterComponent  },

  { path: 'recipe', component:  RecipeComponent  },

  { path: 'liste', component:    ListeComponent  },


  { path: 'donnation', component:     DonnationComponent },
  { path: 'maher', component:      MaherComponent },

  { path: 'fares', component:        FaresComponent },

  { path: 'abubakr', component:      AbubakrComponent},


  { path: 'soudais', component:  SoudaisComponent},
  { path: 'saoud', component:    SaoudComponent},
  { path: 'salah', component:    SalahComponent},
  { path: 'saad', component:    SaadComponent},
  { path: 'mishary', component:     MisharyComponent},
  { path: 'abdelbaset', component: AbdelbasetComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'dashboard', component:       DashboardComponent},


  { path: 'dourous', component:  DourousComponent},
  { path: 'users', component: UsersComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
