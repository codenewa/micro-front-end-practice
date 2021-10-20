import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div id="client-b">
      <div class="card">
        <div class="content">
        <h2>Hello....</h2>
          <a href="#/chart">Charts</a> | <a href="#/popup">Popups</a>
        </div>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class HelloComponent implements OnInit {
  ngOnInit(): void {
  }
}
