import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkArticleComponent } from './link-article.component';

describe('LinkArticleComponent', () => {
  let component: LinkArticleComponent;
  let fixture: ComponentFixture<LinkArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
