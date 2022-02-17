import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { WorkAllComponent } from './components/work-all/work-all.component';
import { AddWorkComponent } from './components/add-work/add-work.component';
import { EditWorkComponent } from './components/edit-work/edit-work.component';

const routes: Routes = [

  {path: '', redirectTo: '/all-work', pathMatch: 'full'},
  {path: 'all-work', component: WorkAllComponent},
  {path: 'edit-work/:id', component: EditWorkComponent},
  {path: 'add-work', component: AddWorkComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
