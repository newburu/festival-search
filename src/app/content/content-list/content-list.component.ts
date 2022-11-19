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
  contents: Content[] = [];
  items: number = 20;
  page: number = 1;

  constructor(
    private sanitizer: DomSanitizer,
    private service: ContentService
  ) { }

  ngOnInit(): void {
    this.addContent();
  }

  addContent(): void {
    this.service.getContents(this.items, this.page).subscribe(res => {
      this.contents = this.contents.concat(res);
    });
    this.page++;
  }

  getVideoUrl(content: Content) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + content.key);
  }
  onScroll() {
    this.addContent();
  }
}
