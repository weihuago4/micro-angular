import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { loadMicroApp, MicroApp } from 'qiankun';

@Component({
  selector: 'app-subapp2',
  template: `
    <div class="subapp2-container"></div>
  `,
})
export class Subapp2Component implements AfterViewInit, OnDestroy {

  microApp!: MicroApp;

  constructor() { }

  ngOnDestroy(): void {
    this.microApp?.unmount();
  }

  ngAfterViewInit(): void {
    this.microApp = loadMicroApp({
      name: 'subapp2',
      entry: 'http://localhost:4202',
      container: '.subapp2-container',
    });
  }

}
