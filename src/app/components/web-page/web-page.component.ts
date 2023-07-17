import { Component, Input, } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-web-page',
  templateUrl: './web-page.component.html',
  styleUrls: ['./web-page.component.scss']
})
export class WebPageComponent {
@Input()content='';
constructor(private sanitizer: DomSanitizer) {}

  getHtmlContent(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.content);
  }
}
