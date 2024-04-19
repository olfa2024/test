import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import {DemoAngularMaterialModule} from "./DemoAngularMaterialModule";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './common/footer/footer.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';

import { MawakitComponent } from './mawakit/mawakit.component';
import { RecetteComponent } from './recette/recette.component';
import { ConseilComponent } from './conseil/conseil.component';
import { NidamComponent } from './nidam/nidam.component';

import { DoaaComponent } from './doaa/doaa.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AnimatedTextComponent } from './components/animated-text/animated-text.component';
import { BenevolatComponent } from './components/benevolat/benevolat.component';
import { HealthComponent } from './components/health/health.component';
import { MealsComponent } from './components/meals/meals.component';
import { HeroComponent } from './components/hero/hero.component';
import { SalimaComponent } from './salima/salima.component';
import { DonneurComponent } from './donneur/donneur.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import {RecipeComponent} from "./recipe/recipe.component";
import {IngredientComponent} from "./ingredient/ingredient.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    FooterComponent,
    InscriptionComponent,
    LoginComponent,

    MawakitComponent,
    RecetteComponent,
    ConseilComponent,
    NidamComponent,
    RecipeComponent,

    DoaaComponent,
    CarouselComponent,
    AnimatedTextComponent,
    BenevolatComponent,
    HealthComponent,
    MealsComponent,
    HeroComponent,
    SalimaComponent,

    DonneurComponent,
    RegisterComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    CarouselModule,
    HttpClientModule,
    DemoAngularMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    HeroComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
