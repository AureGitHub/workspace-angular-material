import { NgModule } from '@angular/core';
import { SharedLib } from './shared-lib';
import { PrimengDemo } from './primeng-demo/primeng-demo';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatButtonModule, SharedLib, PrimengDemo],
  exports: [SharedLib, PrimengDemo]
})
export class SharedLibModule {}
