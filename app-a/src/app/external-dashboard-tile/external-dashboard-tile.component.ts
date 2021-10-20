import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-external-dashboard-tile',
  templateUrl: './external-dashboard-tile.component.html',
  styleUrls: ['./external-dashboard-tile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExternalDashboardTileComponent implements OnInit {

  constructor() { }

  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

  public testObj: any = {};

  public gridData: any[] = products;

  ngOnInit() {
    this.testObj = {
      a: this.a,
      b: this.b,
      c: this.c
    }
  }

}
