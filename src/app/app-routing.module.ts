import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from "./pages/list/list.component";
import { MainComponent } from "./pages/main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'navigator',
    component: ListComponent,
  },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
