import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContentManagementComponent } from './main/content-management/content-management.component';
import { WidgetManagementComponent } from './main/widget-management/widget-management.component';
import { ArticleComponent } from './main/content-management/article/article.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'content-manage', component: ContentManagementComponent },
      { path: 'widget-manage', component: WidgetManagementComponent },
      { path: 'article/:id', component: ArticleComponent },
      { path: 'article', component: ArticleComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
