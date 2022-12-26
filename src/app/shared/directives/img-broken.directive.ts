import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    console.log('Image error: ', this.elHost)
    elNative.src = '../../../../assets/img/imgBroken.png';

  }

  constructor(private elHost:ElementRef) {
   }

}
