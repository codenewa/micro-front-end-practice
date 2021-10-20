import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-pop-up',
  template: `
  <div class="example-config">
        <label><input type="checkbox" [(ngModel)]="enabled"/> Animate</label>
        <hr />
        <label><input type="number" min="0" [(ngModel)]="duration" [disabled]="!animate" style="width:60px;" /> Duration</label>
        <hr />
        <label><input type="radio" value="slide" name="type" [(ngModel)]="type" [disabled]="!animate" /> Slide</label>
        <label><input type="radio" value="expand" name="type" [(ngModel)]="type" [disabled]="!animate" /> Expand</label>
        <label><input type="radio" value="zoom" name="type" [(ngModel)]="type" [disabled]="!animate" /> Zoom</label>
        <label><input type="radio" value="fade" name="type" [(ngModel)]="type" [disabled]="!animate" /> Fade</label>
        <hr />
        <label><input type="radio" value="down" name="direction" [(ngModel)]="direction" [disabled]="!animate || !hasDirection" /> Down</label>
        <label><input type="radio" value="up" name="direction" [(ngModel)]="direction" [disabled]="!animate || !hasDirection" /> Up</label>
        <label><input type="radio" value="left" name="direction" [(ngModel)]="direction" [disabled]="!animate || !hasDirection" /> Left</label>
        <label><input type="radio" value="right" name="direction" [(ngModel)]="direction" [disabled]="!animate || !hasDirection" /> Right</label>
    </div>
    <button #anchor (click)="onToggle()" class="k-button">{{toggleText}} Popup</button>
    <kendo-popup [animate]="animate" [anchor]="anchor" [popupClass]="'content popup'" *ngIf="show">
      <p style="margin: 30px;">Popup content!</p>
    </kendo-popup>
`,
  styles: []
})
export class KendoPopUpComponent implements OnInit {

  public toggleText: string = "Show";
  public show: boolean = false;

  public enabled: boolean = true;
  public duration: number = 200;
  public type: string = 'slide';
  public direction: string = 'down';

  public get animate(): any {
    if (this.enabled) {
      return {
        type: this.type,
        direction: this.direction,
        duration: this.duration
      };
    }

    return false;
  }

  public get hasDirection(): boolean {
    return this.type === 'slide' || this.type === 'expand';
  }

  public onToggle(): void {
    this.show = !this.show;
    this.toggleText = this.show ? "Hide" : "Show";
  }

  ngOnInit() {
  }

}
