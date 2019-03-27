import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ContentManagementComponent } from './main/content-management/content-management.component';
import { WidgetManagementComponent } from './main/widget-management/widget-management.component';
import { HeaderComponent } from './shared/header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// prime Modules
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextModule} from 'primeng/inputtext';
import {TreeModule} from 'primeng/tree';
import { ArticleComponent } from './main/content-management/article/article.component';
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';
import { LinkArticleComponent } from './main/content-management/link-article/link-article.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContentManagementComponent,
    WidgetManagementComponent,
    HeaderComponent,
    ArticleComponent,
    ClickOutsideDirective,
    LinkArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // prime Modules
    ButtonModule,
    DropdownModule,
    AutoCompleteModule,
    InputTextModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
