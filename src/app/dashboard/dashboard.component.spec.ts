import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroService }          from '../hero.service';
import { AppModuletest } from '../app.module.test';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //declarations: [ DashboardComponent ],
        imports: [AppModuletest, ],
        //providers: [HeroService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  // it('should be equal to', () => {
  //   expect(component).toBeTruthy();
  // });
});
