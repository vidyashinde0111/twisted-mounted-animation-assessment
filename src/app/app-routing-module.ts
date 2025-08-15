import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableView } from './component/table-view/table-view';
import { DetailsView } from './component/details-view/details-view';

const routes: Routes = [
  { path: '', component: TableView },
  { path: 'details/:id', component: DetailsView },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
