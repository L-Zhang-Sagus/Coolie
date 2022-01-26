import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home'
  },
  {
    path: 'home',
    loadChildren: ()=> import('./features/home/home-routing.module').then(h => h.HomeRoutingModule)
  },
  {
    path: 'lv',
    loadChildren: () => import('./features/lv/lv.module').then(l => l.LvModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
