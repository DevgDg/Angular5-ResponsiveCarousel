import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DgcarouselComponent } from './dgcarousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DgcarouselComponent],
  exports: [DgcarouselComponent]
})
export class DgcarouselModule { }
