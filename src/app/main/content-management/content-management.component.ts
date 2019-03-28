import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng/api";
import { SelectItemGroup } from "primeng/api";

@Component({
  selector: "app-content-management",
  templateUrl: "./content-management.component.html",
  styleUrls: ["./content-management.component.scss"]
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
  articlesData = [
    { name: "iPhone 7", checked: false, type: "folder" },
    { name: "iPhone 6", checked: false, type: "folder" },
    { name: "iPhone 5", checked: false, type: "folder" },
    {
      name: "text",
      checked: false,
      type: "text",
      title: "Using 3D touch",
      tegs: ['3d touch', 'screen'],
      text: `3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.
      3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.`
    },
    {
      name: "text 5",
      checked: false,
      type: "text",
      tegs: ['multi', 'using'],
      title: "Using 3D touch",
      text: "sdfsdfsdfsd sdfs dfs dfsd fsdf sdf sdfsdfsdfsdfsdf"
    }
  ];

  constructor() {}
  searchText = ""
  selectedFolder;
  selectedText;
  searchResultData = [];

  searchTextChange(e){
    this.searchResultData = [];
    this.articlesData.forEach(element => {
      if(element.type === 'text'){
        if(element.text.includes(e)){
          this.searchResultData.push({
            type: "text",
            label: element.title
          })
        }

        for(let item of element.tegs){
          if(item.includes(e)){
            this.searchResultData.push({
              type: "teg",
              label: item
            })
          }
        }
      }
    })
    console.log(e, this.searchResultData)
  }

  onNodeSelect(e, i) {
    this.selectedFolder = e.node;
  }

  selectType(item) {
    this.selectedText = item;
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
        label: "Lazy Node 0",
        data: "Node 0",
        expandedIcon: "fa fa-folder-open",
        collapsedIcon: "fa fa-folder",
        leaf: false,
        children: [
          {
            label: "Lazy Node 0",
            data: "Node 0",
            expandedIcon: "fa fa-folder-open",
            collapsedIcon: "fa fa-folder"
          },
          {
            label: "Lazy Node 1",
            data: "Node 1",
            expandedIcon: "fa fa-folder-open",
            collapsedIcon: "fa fa-folder"
          },
          {
            label: "Lazy Node 1",
            data: "Node 2",
            expandedIcon: "fa fa-folder-open",
            collapsedIcon: "fa fa-folder"
          }
        ]
      },
      {
        label: "Lazy Node 1",
        data: "Node 1",
        expandedIcon: "fa fa-folder-open",
        collapsedIcon: "fa fa-folder"
      },
      {
        label: "Lazy Node 2",
        data: "Node 2",
        expandedIcon: "fa fa-folder-open",
        collapsedIcon: "fa fa-folder"
      }
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
    console.log("delete elem ", index + 1);
  }

  deleteArticles() {
    this.articlesData = this.articlesData.filter(item => {
      if (item.checked === false) {
        return true;
      }
    });
  }
}
