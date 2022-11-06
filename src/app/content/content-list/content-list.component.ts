import { Component } from '@angular/core';
import { Content } from '../content';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent {
  contents: Content[] = [
    { id: 1, name: 'aaa', videoId: 'XhzRWckACOo' },
    { id: 2, name: 'bbb', videoId: 'XhzRWckACOo' },
    { id: 3, name: 'ccc', videoId: 'XhzRWckACOo' },
  ];

  constructor(private sanitizer: DomSanitizer) { }

  getVideoUrl(content: Content){
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + content.videoId);
  }

}
