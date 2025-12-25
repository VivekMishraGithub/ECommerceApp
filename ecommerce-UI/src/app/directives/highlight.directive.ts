import { Directive, HostListener, Input } from '@angular/core';
import { ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
//  @Input() highlightBg?: string;
//   @Input() highlightText?: string;

  constructor(private el: ElementRef<HTMLInputElement>) {}

  ngOnInit() {
    // if (!this.highlightBg) this.highlightBg = 'lightgray';
    // if (!this.highlightText) this.highlightText = 'black';
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.el.nativeElement.style.backgroundColor = this.highlightBg;
  //   this.el.nativeElement.style.color = this.highlightText;
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.el.nativeElement.style.backgroundColor = '';
  //   this.el.nativeElement.style.color = '';
  // }

  @HostListener('input')
  onInput(): void{
    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }

  @HostListener('mouseenter')
  onMouseEnter(): void{
    this.el.nativeElement.style.backgroundColor = 'lightgray';
  }


}
