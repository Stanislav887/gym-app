import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'exercises',
    loadComponent: () => import('./exercises/exercises.page').then( m => m.ExercisesPage)
  },
  {
    path: 'favorites',
    loadComponent: () => import('./favorites/favorites.page').then( m => m.FavoritesPage)
  },
  {
    path: 'muscles',
    loadComponent: () => import('./muscles/muscles.page').then( m => m.MusclesPage)
  },
  {
    path: 'chest',
    loadComponent: () => import('./chest/chest.page').then( m => m.ChestPage)
  },
  {
    path: 'legs',
    loadComponent: () => import('./legs/legs.page').then( m => m.LegsPage)
  },
  {
    path: 'arms',
    loadComponent: () => import('./arms/arms.page').then( m => m.ArmsPage)
  },
  {
    path: 'back',
    loadComponent: () => import('./back/back.page').then( m => m.BackPage)
  },
];
