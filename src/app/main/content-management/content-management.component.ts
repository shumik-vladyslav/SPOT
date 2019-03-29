import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng/api";
import { SelectItemGroup } from "primeng/api";
declare var $;
declare var Mark;

@Component({
  selector: "app-content-management",
  templateUrl: "./content-management.component.html",
  styleUrls: ["./content-management.component.scss"]
})
export class ContentManagementComponent implements OnInit {

  constructor() { }
  article = true;
  articles = true;
  searchResult = false;
  welcome = true;
  folders = true;
  dublicate = false;

  id;
  addTagField;
  math = Math;
  searchIn: SelectItem[];
  selectedSearchIn;
  filesTree0;
  questuonSettings = {};
  dublicateQuestionData = [
    { 
      name: " How do I use the 3D touch?",
      questions: [
        {
          name: "What is the camera resolution?",
          path:
            "Content > Tecnical > Phones > iPhone > iPhone 8 > Specifications"
        },
        {
          name: "What is the camera resolution?",
          path:
            "Content > Tecnical > Phones > iPhone > iPhone 7 > Specifications"
        },
        {
          name: "What is the camera resolution?",
          path:
            "Content > Tecnical > Phones > iPhone > iPhone 6 > Specifications"
        },
        {
          name: "What is the camera resolution?",
          path:
            "Content > Tecnical > Phones > iPhone > iPhone 5 > Specifications"
        }
      ]
    },
    {
      name: "How to replace the screen?",
      questions: [
        {
          name: "How to replace the screen?",
          path:
            "Content > Tecnical > Phones > iPhone > iPhone 8 > Specifications"
        },
        {
          name: "How to replace the screen?",
          path:
            "Content > Tecnical > Phones > iPhone > iPhone 7 > Specifications"
        },
        {
          name: "How to replace the screen?",
          path:
            "Content > Tecnical > Phones > iPhone > iPhone 6 > Specifications"
        },
        {
          name: "How to replace the screen?",
          path:
            "Content > Tecnical > Phones > iPhone > iPhone 5 > Specifications"
        }
      ]
    }
  ];
  selectedType;
  articlesData = {
    Android: [
      { id: "1", name: "Android 7", checked: false, type: "folder" },
      { id: "2", name: "Android 6", checked: false, type: "folder" },
      { id: "3", name: "Android 5", checked: false, type: "folder" },
      {
        id: "4", 
        name: "text",
        checked: false,
        type: "text",
        title: "Using 3D touch",
        tegs: ['3d touch', 'screen'],
        questins: ['Which iPhone, iPad, and iPod touch models support iOS 1?','Which iPhone, iPad, and iPod touch models support iOS 2?','Which iPhone, iPad, and iPod touch models support iOS 3?','Which iPhone, iPad, and iPod touch models support iOS 4?', 'Which iPhone, iPad, and iPod touch models support iOS 5?'],
        text: `3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.
        3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.
        3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.
        3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.
        3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.`
      },
      {
        id: "5", 
        name: "text 5",
        checked: false,
        type: "text",
        questins: ['Using 3D touch models support iOS 12?', 'Which iPhone, iPad, and iPod touch models support iOS 10?'],
        tegs: ['multi', 'using'],
        title: "Using 3D touch",
        text: "multitouch sdfsdfsdfsd sdfs dfs dfsd fsdf sdf sdfsdfsdfsdfsdf"
      }
    ],
    Apple: [
      { id: "1", name: "iPhone 7", checked: false, type: "folder" },
      { id: "2", name: "iPhone 6", checked: false, type: "folder" },
      { id: "3", name: "iPhone 5", checked: false, type: "folder" },
      {
        id: "5", 
        name: "text 5",
        checked: false,
        type: "text",
        questins: ['Using 3D touch models support iOS 12?', 'Which iPhone, iPad, and iPod touch models support iOS 10?'],
        tegs: ['multi', 'using'],
        title: "Using 3D touch",
        text: "2 sdfs dfs dfsd fsdf sdf sdfsdfsdfsdfsdf"
      }
    ],
    Windows:[
      { id: "1", name: "w1", checked: false, type: "folder" },
      { id: "2", name: "w2", checked: false, type: "folder" },
      { id: "3", name: "w3", checked: false, type: "folder" },
    ],
    Devices: [
      { id: "1", name: "Windows", checked: false, type: "folder" },
      { id: "2", name: "Apple", checked: false, type: "folder" },
      { id: "3", name: "Android", checked: false, type: "folder" },
    ]
  }
  searchText = '';
  selectedFolder;
  selectedText;
  searchResultData = [];
  editPageCount;
  editPageCountValue;
  previewText;
  searchTextChange(e) {
    this.searchResultData = [];
    this.articlesData[this.selectedType].forEach((element, index) => {
      if (element.type === 'text') {
        if (element.text.includes(e)) {
          this.searchResultData.push({
            type: "text",
            label: element.title,
            element: element
          });
        }

        for (let item of element.tegs) {
          if (item.includes(e)) {
            this.searchResultData.push({
              type: "teg",
              label: item,
              element: element
            });
          }
        }
      }
    });
    console.log(e, this.searchResultData);

    setTimeout(() => {

      var divs = document.querySelectorAll('.context');

      [].forEach.call(divs, function(div) {
        console.log(div)
        var options = {};
        var markInstance = new Mark(div);
  
        markInstance.unmark({
          done: function(){
            markInstance.mark(e, options);
          }
        });
      });
    }, 100);
  }

  onNodeSelect(e, i) {
    console.log(e);
    this.selectedType = e.node.label;
    this.selectedFolder = e.node;
    this.welcome = false;
  }
  selectType(item, index) {
    if (item.type === 'text') {
      this.editPageCount = 5;
      this.selectedText = item;
      console.log(item, 'item');
      this.previewText = item.text.split('.');
      this.previewText = this.previewText.slice(this.editPageCount - 5, this.editPageCount);
      this.editPageCountValue = this.math.ceil(this.selectedText.text.split('.').length / 5);
    }
    this.id = item.id;
  }
  selectedTextAction(flag) {
    console.log(this.editPageCount, 'this.editPageCount');

    if (flag === 'prev' && this.editPageCount > 5) {
      this.editPageCount = this.editPageCount - 5;
    } else if (flag === 'next' && this.editPageCount < this.selectedText.text.split('.').length) {
      this.editPageCount = this.editPageCount + 5;
    }
    this.previewText = this.selectedText.text.split('.').slice(this.editPageCount - 5, this.editPageCount);
  }

  addFolder() {
    if (this.selectedFolder) {
      if (!this.selectedFolder.children) {
        this.selectedFolder.children = [];
      }
      this.selectedFolder.children.push({
        label: "",
        data: "Node 0",
        expandedIcon: "fa fa-folder-open",
        collapsedIcon: "fa fa-folder"
      });
    } else {
      this.filesTree0.push({
        label: "",
        data: "Node 0",
        expandedIcon: "fa fa-folder-open",
        collapsedIcon: "fa fa-folder"
      });
    }
  }

  ngOnInit() {
    this.filesTree0 = [
      {
        label: "Devices",
        data: "Node 0",
        expandedIcon: "fa fa-folder-open",
        collapsedIcon: "fa fa-folder",
        leaf: false,
        expanded: false,
        children: [
          {
            label: "Android",
            data: "Node 0",
            expandedIcon: "fa fa-folder-open",
            collapsedIcon: "fa fa-folder"
          },
          {
            label: "Apple",
            data: "Node 1",
            expandedIcon: "fa fa-folder-open",
            collapsedIcon: "fa fa-folder"
          },
          {
            label: "Windows",
            data: "Node 2",
            expandedIcon: "fa fa-folder-open",
            collapsedIcon: "fa fa-folder"
          }
        ]
      },
    ];
    this.searchIn = [
      { label: "Current Folder", value: "Current Folder" },
      { label: "All Folder", value: "All Folder" }
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
    this.searchResult = false;
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
    console.log('delete elem', index + 1);
  }
  addTags(data, value) {
    data.push(value);
    console.log(data, 'data');
    this.addTagField = '';
  }
  deleteArticles() {
    this.articlesData = this.articlesData[this.selectedType].filter(item => {
      if (item.checked === false) {
        return true;
      }
    });
  }
  deleteSearchResults() {
    this.searchResultData = this.searchResultData.filter(item => {
      console.log(item, 'item');
      if (item.element.checked === false) {
        return true;
      }
    });
  }
  deleteQuestion() {
    let count = 0;
    for (const key in this.questuonSettings) {
      if (this.questuonSettings[key]) {
        this.selectedText.questins.splice(+key - count, 1);
        count++;
      }
    }
    this.questuonSettings = {};
  }
  expandetTree() {
    this.filesTree0.forEach(element => {
      element.expanded = false;
    });
  }
}
