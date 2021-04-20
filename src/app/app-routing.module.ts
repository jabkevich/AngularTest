import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InputDataComponent} from "./input-data/input-data.component";
import {RedactorDataComponent} from "./redactor-data/redactor-data.component";

const routes: Routes = [
  {path: '', component: InputDataComponent},
  {path: 'redactor', component: RedactorDataComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
