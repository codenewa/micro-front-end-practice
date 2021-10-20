import { Component, ViewChild, OnInit } from '@angular/core';
import { ExternalAppHostComponent } from './external-app-host/external-app-host.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }


  appList = ['client-a', 'client-c', 'client-b'];

  @ViewChild(ExternalAppHostComponent, { static: true }) externalAppHost: ExternalAppHostComponent;

  public showApp(app: string): void {
    this.externalAppHost.load(app);
  }

  title = 'app-host';
}
