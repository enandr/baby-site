import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProgressDateComponent } from './Pages/progress-date/progress-date.component';
import { ViewNamesComponent } from './Pages/view-names/view-names.component';
import { SuggestANameComponent } from './Pages/suggest-a-name/suggest-a-name.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'progress', component: ProgressDateComponent },
  { path: 'viewnames', component: ViewNamesComponent },
  { path: 'suggestaname', component: SuggestANameComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
