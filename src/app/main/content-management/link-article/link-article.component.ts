import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';

@Component({
  selector: 'app-link-article',
  templateUrl: './link-article.component.html',
  styleUrls: ['./link-article.component.scss']
})

export class LinkArticleComponent implements OnInit {
  @Input() show;
  @Output() hide = new EventEmitter;

  article = true;
  articles = true;
  searchResult = false;
  folders = true;

  searchIn: SelectItem[];
  selectedSearchIn;
  filesTree0;

  constructor() { }

  ngOnInit() {
    this.filesTree0 = [
      {
        "label": "Lazy Node 0",
        "data": "Node 0",
        "expandedIcon": "fa fa-folder-open",
        "collapsedIcon": "fa fa-folder",
        "leaf": false,
        "children": [
          {
            "label": "Lazy Node 0",
            "data": "Node 0",
            "expandedIcon": "fa fa-folder-open",
            "collapsedIcon": "fa fa-folder",
          },
          {
            "label": "Lazy Node 1",
            "data": "Node 1",
            "expandedIcon": "fa fa-folder-open",
            "collapsedIcon": "fa fa-folder",
          },
          {
            "label": "Lazy Node 1",
            "data": "Node 2",
            "expandedIcon": "fa fa-folder-open",
            "collapsedIcon": "fa fa-folder",
          }
        ]
      },
      {
        "label": "Lazy Node 1",
        "data": "Node 1",
        "expandedIcon": "fa fa-folder-open",
        "collapsedIcon": "fa fa-folder",
      },
      {
        "label": "Lazy Node 1",
        "data": "Node 2",
        "expandedIcon": "fa fa-folder-open",
        "collapsedIcon": "fa fa-folder",
      }
    ];
    this.searchIn = [
      { label: 'Current Folder', value: 'Current Folder' },
      { label: 'All Folder', value: 'All Folder' }
    ];
    this.selectedSearchIn = this.searchIn[0].label;
  }

  close() {
    this.show = false;
    this.hide.emit('');
  }

}