import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'project/:id',
    loadChildren: () => import('./project/project.module').then( m => m.ProjectPageModule)
  },
  {
    path: 'new-item',
    loadChildren: () => import('./new-item/new-item.module').then( m => m.NewItemPageModule)
  },
  {
    path: 'new-project',
    loadChildren: () => import('./new-project/new-project.module').then( m => m.NewProjectPageModule)
  },
  {
    path: 'scan',
    loadChildren: () => import('./scan/scan.module').then( m => m.ScanPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
