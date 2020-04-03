import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathConfig } from '../config/path.config';
import { MenuComponent } from '../components/menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: PathConfig.MENU, pathMatch: 'full' },
  { path: PathConfig.MENU, component: MenuComponent },
  {
    path: PathConfig.PROCEDURES,
    loadChildren: () => import('../components/procedures/procedures.module').then(m => m.ProceduresModule),
  },
  {
    path: PathConfig.SLIDER,
    loadChildren: () => import('../components/slider/slider.module').then(m => m.SliderModule),
  },
  {
    path: PathConfig.MULTISELECT,
    loadChildren: () => import('../components/multiselect/multiselect.module').then(m => m.MultiselectModule),
  },
  {
    path: PathConfig.MASKINPUT,
    loadChildren: () => import('../components/mask-input/mask-input.module').then(m => m.MaskInputModule),
  },
  {
    path: PathConfig.ORGANIZER,
    loadChildren: () => import('../components/organizer/organizer.module').then(m => m.OrganizerModule),
  },
  {
    path: PathConfig.ASTERISK,
    loadChildren: () => import('../components/asterisk/asterisk.module').then(m => m.AsteriskModule),
  },
  {
    path: PathConfig.DYNAMIC_TABS,
    loadChildren: () => import('../components/dynamic-tabs/dynamic-tabs.module').then(m => m.DynamicTabsModule),
  },
  { path: PathConfig.ANY, redirectTo: PathConfig.MENU, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
