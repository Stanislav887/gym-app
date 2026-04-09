import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muscles',
  templateUrl: './muscles.page.html',
  styleUrls: ['./muscles.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonButtons, IonBackButton]
})
export class MusclesPage implements OnInit {

  muscles = [
    { name: 'Chest', route: '/chest' },
    { name: 'Legs', route: '/legs' },
    { name: 'Arms', route: '/arms' },
    { name: 'Back', route: '/back' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

}
