import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { KendoChartComponent } from './kendo-chart/kendo-chart.component';
import { PopupModule } from '@progress/kendo-angular-popup';
import { KendoPopUpComponent } from './kendo-pop-up/kendo-pop-up.component';
import { createCustomElement } from '@angular/elements';
import { EventLogComponent } from './event-log/event-log.component';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    KendoChartComponent,
    KendoPopUpComponent,
    EventLogComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    PopupModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const externalTileCE = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('external-app-b', externalTileCE);
  }

}
