import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss']
})
export class ContentManagementComponent implements OnInit {
  article = true;
  articles = true;
  searchResult = false;
  welcome = false;
  folders = true;
  dublicate = false;

  searchIn: SelectItem[];
  selectedSearchIn;
  filesTree0;
  dublicateQuestionData = [
    {
      name: ' How do I use the 3D touch?',
      questions: [
        { name: 'What is the camera resolution?', path: 'Content > Tecnical > Phones > iPhone > iPhone 8 > Specifications' },
        { name: 'What is the camera resolution?', path: 'Content > Tecnical > Phones > iPhone > iPhone 7 > Specifications' },
        { name: 'What is the camera resolution?', path: 'Content > Tecnical > Phones > iPhone > iPhone 6 > Specifications' },
        { name: 'What is the camera resolution?', path: 'Content > Tecnical > Phones > iPhone > iPhone 5 > Specifications' }
      ]
    },
    {
      name: 'How to replace the screen?',
      questions: [
        { name: 'How to replace the screen?', path: 'Content > Tecnical > Phones > iPhone > iPhone 8 > Specifications' },
        { name: 'How to replace the screen?', path: 'Content > Tecnical > Phones > iPhone > iPhone 7 > Specifications' },
        { name: 'How to replace the screen?', path: 'Content > Tecnical > Phones > iPhone > iPhone 6 > Specifications' },
        { name: 'How to replace the screen?', path: 'Content > Tecnical > Phones > iPhone > iPhone 5 > Specifications' }
      ]
    },
  ];
  articlesData = [
    { name: 'iPhone 7', checked: false },
    { name: 'iPhone 6', checked: false },
    { name: 'iPhone 5', checked: false },
  ];

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

  openDubicate() {
    this.articles = false;
    this.folders = false;
    this.dublicate = true;
  }
  backContent() {
    this.articles = true;
    this.folders = true;
    this.dublicate = false;
  }
  openSearch() {
    this.article = true;
    this.articles = false;
    this.searchResult = true;
    this.folders = false;
    this.dublicate = false;
  }

  closeSearch() {
    this.article = true;
    this.articles = true;
    this.searchResult = false;
    this.folders = true;
    this.dublicate = false;
  }

  detaleItem(data, index) {
    data.splice(index, 1);
    console.log('delete elem ', index + 1);
  }

  deleteArticles() {
    this.articlesData = this.articlesData.filter(
      item => {
        if (item.checked === false) {
          return true;
        }
      }
    );
  }

}
