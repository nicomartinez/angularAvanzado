import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCodeSearchComponent } from './git-code-search.component';

describe('GitCodeSearchComponent', () => {
  let component: GitCodeSearchComponent;
  let fixture: ComponentFixture<GitCodeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitCodeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitCodeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
