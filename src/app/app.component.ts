import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./pages/about/about.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { HeaderComponent } from "./pages/header/header.component";
import { ViewClaimsComponent } from "./pages/view-claims/view-claims.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent, ContactUsComponent, FooterComponent, HeaderComponent, ViewClaimsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'smartcertify';
}
