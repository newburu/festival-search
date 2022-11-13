import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
import { ContentService } from '../content.service';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  contents: Content[] = [
    { id: 1, name: 'aaa', key: 'wZQoiJZpToI', path: 'https://www.youtube.com/embed/wZQoiJZpToI' },
    { id: 2, name: 'bbb', key: 'wZQoiJZpToI', path: 'https://www.youtube.com/watch?v=wZQoiJZpToI' },
    { id: 3, name: 'ccc', key: 'wZQoiJZpToI', path: 'https://www.youtube.com/watch?v=wZQoiJZpToI' },
    { id: 4, name: 'ccc', key: 'wZQoiJZpToI', path: 'https://www.youtube.com/watch?v=wZQoiJZpToI' },
    { id: 5, name: 'ccc', key: 'wZQoiJZpToI', path: 'https://www.youtube.com/watch?v=wZQoiJZpToI' },
  ];

  constructor(
    private sanitizer: DomSanitizer,
    private service: ContentService
  ) { }

  ngOnInit(): void {
    this.service.getContents().subscribe(res => {
      console.log(res);
      this.contents = res;
    });
  }
  getVideoUrl(content: Content){
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + content.key);
  }

}
