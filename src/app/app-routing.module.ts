import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'apresentacao',
    loadChildren: () => import('./apresentacao/apresentacao.module').then( m => m.ApresentacaoPageModule)
  },
  {
    path: 'etapa1',
    loadChildren: () => import('./etapa1/etapa1.module').then( m => m.Etapa1PageModule)
  },
  {
    path: 'lampada',
    loadChildren: () => import('./lampada/lampada.module').then( m => m.LampadaPageModule)
  },  
  {
    path: 'lampada/:id',
    loadChildren: () => import('./lampada/lampada.module').then( m => m.LampadaPageModule)
  },
  {
    path: 'listar-lampada',
    loadChildren: () => import('./listar-lampada/listar-lampada.module').then( m => m.ListarLampadaPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
