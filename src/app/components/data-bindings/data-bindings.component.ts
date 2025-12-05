import { Component } from '@angular/core';
import { DataBindingsLatestComponent } from "../data-bindings-latest/data-bindings-latest.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-data-bindings',
  imports: [DataBindingsLatestComponent, FormsModule, CommonModule],
  templateUrl: './data-bindings.component.html',
  styleUrl: './data-bindings.component.css'
})
export class DataBindingsComponent {
//Interpolacion y vinculacion de propiedades
  appName = 'SmartCertify';
  logoUrl ='https://smartlearnbykarthik.azurewebsites.net/assets/android-chrome-512x512.png';
  appDescription = 'Una plataforma increible para probar y certificar tus conocimientos';

  //Enlace bidireccional
  username='';

  // *ngIf, *ngElse
  isWelcomeVisible = true;

  toggleWelcome(){
    this.isWelcomeVisible = !this.isWelcomeVisible;
  }

  //*ngFor
  technologies = ['Angular','.Net Core','C#','Azure','React'];

  //Vinculacion de eventos
  clickCounter = 0;

  incrementCounter(){
    this.clickCounter++;
  }

  //Directiva de atributos ngClass y ngStyle
  isHighlighted = false;

  getClass(){
    return this.isHighlighted ? 'text-primary' :'text-secondary';
  }

  getStyle(){
    return this.isHighlighted
      ? {fontWeight: 'bold', fontSize: '24px'}
      : {fontWeight:'normal', fontSize: '20px'};
  }

  toggleHighlight(){
    this.isHighlighted = !this.isHighlighted;
  }
}
