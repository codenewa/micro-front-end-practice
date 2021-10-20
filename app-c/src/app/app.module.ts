import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { ExternalDashboardTileComponent } from './external-dashboard-tile/external-dashboard-tile.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ExternalDashboardTileComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const externalTileCE = createCustomElement(ExternalDashboardTileComponent, { injector: this.injector });
    customElements.define('external-dashboard-tile-c', externalTileCE);
  }

}
