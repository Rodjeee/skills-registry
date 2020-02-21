import { NgModule, Optional, SkipSelf } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Iport it in the AppModule only!'
      );
    } 
  }
}
