import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./template/template.module').then(m => m.TemplatePageModule),

  // },
  {
    path: 'template',
    loadChildren: () => import('./template/template.module').then( m => m.TemplatePageModule),
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      }
      ,
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }
      ,
      )
  ],
  exports: [RouterModule

  ]
})
export class AppRoutingModule {}
