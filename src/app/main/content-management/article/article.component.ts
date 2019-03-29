import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articlesData = [
    { id: "1", name: "iPhone 7", checked: false, type: "folder" },
    { id: "2", name: "iPhone 6", checked: false, type: "folder" },
    { id: "3", name: "iPhone 5", checked: false, type: "folder" },
    {
      id: "4",
      name: "text",
      checked: false,
      type: "text",
      title: "Using 3D touch",
      tegs: ['3d touch', 'screen'],
      questins: ['Which iPhone, iPad, and iPod touch models support iOS 1?', 'Which iPhone, iPad, and iPod touch models support iOS 2?', 'Which iPhone, iPad, and iPod touch models support iOS 3?', 'Which iPhone, iPad, and iPod touch models support iOS 4?', 'Which iPhone, iPad, and iPod touch models support iOS 5?'],
      text: `3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.
      3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.
      3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.
      3D Touch is multitouch made multidimensional. With it you can press3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.
      3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.`,
      picture: 'http://images4.fanpop.com/image/photos/19400000/rainbow-sky-beautiful-pictures-19401741-1093-614.jpg',
    },
    {
      id: "5",
      name: "text 5",
      checked: false,
      type: "text",
      questins: ['Using 3D touch models support iOS 12?', 'Which iPhone, iPad, and iPod touch models support iOS 10?'],
      tegs: ['multi', 'using'],
      title: "Using 3D touch",
      text: "sdfsdfsdfsd sdfs dfs dfsd fsdf sdf sdfsdfsdfsdfsdf"
    }
  ];

  dialog;
  sectionData = [];
  addTagField;
  showPreview;
  showAddSection;
  // tslint:disable-next-line:max-line-length
  text = `3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.  If you have an iPhone 6s or later, you can also press firmly (3D Touch) on an app icon to bring up quick actions. All apps have quick actions, even if it's simply the standard App Store app shortcut that lets you share the app with someone else. Some apps have several quick actions, including dynamic quick actions that update based on the last person you contacted, article you read, show you watched, etc. Tap on an action to go directly to that feature or content in the app.`;
  constructor(private activatedRoute: ActivatedRoute, private route: Router) { }

  dataToEdit;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params;
      console.log(id);
      for (const key in this.articlesData) {
        if (this.articlesData[key].id === id.id) {
          this.dataToEdit = this.articlesData[key];
        }
      }
      console.log(this.dataToEdit, 'dataToEdit');
    });
    for (const key in this.dataToEdit) {
      if (key === 'text' || key === 'picture') {
        this.sectionData.push({
          [key]: this.dataToEdit[key]
        });
      }
    }
    console.log(this.sectionData, 'this.sectionData');
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
  addSection(flag) {
    if (flag === 'text') {
      this.sectionData.push({
        [flag]: 'New Section'
      });
    } else if (flag === 'picture') {
      this.sectionData.push({
        [flag]: 'https://s3.amazonaws.com/tinycards/image/36125d06520a2f6acdae39d1221e5ca8'
      });
    }
    this.showAddSection = false;
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }
  moveTop(item, index) {
    console.log(index);
    if (index !== 0) {
      // let nextArr = this.sectionData.slice(index - 1, 1)
      this.sectionData.splice(index, 1);
      this.sectionData.splice(index - 1, 0, item);
    }
    console.log(this.sectionData);
  }
  moveBot(item, index) {
    console.log(index);
    if (index !== this.sectionData.length) {
      // let nextArr = this.sectionData.slice(index - 1, 1)
      this.sectionData.splice(index, 1);
      this.sectionData.splice(index + 1, 0, item);
    }
    console.log(this.sectionData);
  }
  answer(event) {
    if (event) {
      this.route.navigate(['/content-manage']);
    }
    this.dialog = false;
  }
}