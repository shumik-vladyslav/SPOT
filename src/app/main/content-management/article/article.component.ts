import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  showPreview;
  // tslint:disable-next-line:max-line-length
  text = `3D Touch is multitouch made multidimensional. With it you can press deeply to launch actions instead of apps, reply to notifications, preview messages and links, switch keyboards, switch apps, animate Live Photos, vary stroke width, and more. It's like a wormhole through iOS that lets you move around faster than ever.  If you have an iPhone 6s or later, you can also press firmly (3D Touch) on an app icon to bring up quick actions. All apps have quick actions, even if it's simply the standard App Store app shortcut that lets you share the app with someone else. Some apps have several quick actions, including dynamic quick actions that update based on the last person you contacted, article you read, show you watched, etc. Tap on an action to go directly to that feature or content in the app.`;
  constructor() { }

  ngOnInit() {
  }

}
