import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { KendoChartComponent } from './kendo-chart/kendo-chart.component';
import { KendoPopUpComponent } from './kendo-pop-up/kendo-pop-up.component';


const routes: Routes = [
  { path: 'chart', component: KendoChartComponent },
  { path: 'popup', component: KendoPopUpComponent },

  { path: '**', component: HelloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
