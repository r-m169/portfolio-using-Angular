import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('typingElements') typingElements!: ElementRef[];

  ngAfterViewInit(): void {
    this.wrapTextWithSpans();
  }

  // to display it word by word 
  private wrapTextWithSpans(): void {
    this.typingElements.forEach((element: ElementRef) => {
      const text = element.nativeElement.innerText;
      const words = text.trim().split(' ');
      const newText = words
        .map((word: string) => `<span class="typing-animation">${word} </span>`)
        .join('');
      element.nativeElement.innerHTML = newText;
    });
  }
}
