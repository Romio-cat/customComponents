import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathConfig } from '../config/path.config';
import { MenuComponent } from '../components/menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: PathConfig.MENU, pathMatch: 'full' },
  { path: PathConfig.MENU, component: MenuComponent },
  {
    path: PathConfig.PROCEDURES,
    loadChildren: '../components/procedures/procedures.module#ProceduresModule',
  },
  {
    path: PathConfig.SLIDER,
    loadChildren: '../components/slider/slider.module#SliderModule',
  },
  {
    path: PathConfig.MULTISELECT,
    loadChildren: '../components/multiselect/multiselect.module#MultiselectModule',
  },
  {
    path: PathConfig.MASKINPUT,
    loadChildren: '../components/mask-input/mask-input.module#MaskInputModule',
  },
  { path: PathConfig.ANY, redirectTo: PathConfig.MENU, pathMatch: 'full' },
];

// const appRoutes: Routes = [
//   {
//     path: PathConfig.MENU,
//     component: MenuComponent,
//   },
//   {
//     path: PathConfig.PROCEDURES,
//     loadChildren: '../components/procedures/procedures.module#ProceduresModule',
//   },
//   {
//     path: PathConfig.SLIDER,
//     loadChildren: '../components/slider/slider.module#SliderModule',
//   },
//   {
//     path: PathConfig.MULTISELECT,
//     loadChildren: '../components/multiselect/multiselect.module#MultiselectModule',
//   },
//   { path: '', redirectTo: PathConfig.MENU, pathMatch: 'full' },
//   { path: PathConfig.ANY, redirectTo: '' }
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
