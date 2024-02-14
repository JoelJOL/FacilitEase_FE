import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: string, query: string): SafeHtml {
    if (!query || !value) {
      return value;
    }

    const regExp = new RegExp(`(${query})`, 'gi');
    const highlightedValue = value.replace(regExp, '<b>$1</b>');
    return this.sanitizer.bypassSecurityTrustHtml(highlightedValue);
  }
}
