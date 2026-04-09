import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardHeader, IonCardTitle, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ExercisesPage implements OnInit {

  exercises: any[] = [];

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.workoutService.getExercises().subscribe(data => {
      this.exercises = data;
    });
  }

}
