import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path: 'listacurso', loadChildren: () => import('./listacurso/listacurso.module').then(m => m.ListacursoModule)

},

{
  path: '', pathMatch: 'full', redirectTo: 'listacurso'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
