import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CodeChallengesComponent } from './code-challenges/code-challenges.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { GiftListComponent } from './GiftList/GiftList.component';

const routes: Routes = [
  { path: '', redirectTo: 'gift-list', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'code-challenges', component: CodeChallengesComponent },
  { path: 'drag-drop', component: DragDropComponent },
  { path: 'gift-list', component: GiftListComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
