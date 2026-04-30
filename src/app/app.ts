import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Products } from './components/products/products';
import { About } from './components/about/about';
import { Location } from './components/location/location';
import { Footer } from './components/footer/footer';
import { FloatingWhatsapp } from './components/floating-whatsapp/floating-whatsapp';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Hero,
    Products,
    About,
    Location,
    Footer,
    FloatingWhatsapp
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
