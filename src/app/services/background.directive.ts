import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  @Input() correctAnswer = false;

  constructor(private eleRef : ElementRef, private renderer : Renderer2) { }

  @HostListener('click') onAnswered(){
      if(this.correctAnswer){
          this.renderer.setStyle(this.eleRef.nativeElement, 'background', '#198754')
      }else{
          this.renderer.setStyle(this.eleRef.nativeElement, 'background', '#dc3545')
      }
  }

}
