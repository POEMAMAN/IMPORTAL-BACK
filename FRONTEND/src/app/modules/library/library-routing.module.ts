import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from '../auth/guards/verify-token.guard';
import { LibraryComponent } from './library.component';


const routes: Routes = [
  {
      path: '', children: [
    {
      path: '', canActivate: [verifyTokenGuard], component: LibraryComponent
    },
    {
      path: 'duneUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./dune-universe/dune-universe.module').then(m => m.DuneUniverseModule)
    },
    {
      path: 'alienUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./alien-universe/alien-universe.module').then(m => m.AlienUniverseModule)
    },
    {
      path: 'hungerGamesUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./hungerGames-universe/hungerGames-universe.module').then(m => m.HungerGamesUniverseModule)
    },
    {
      path: 'harryPotterUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./harryPotter-universe/harryPotter-universe.module').then(m => m.HarryPotterUniverseModule)
    },
    {
      path: 'hungerGamesUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('./hungerGames-universe/hungerGames-universe.module').then(m => m.HungerGamesUniverseModule)
    },
    {
      path: '**', redirectTo: 'library', pathMatch: 'full'
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
