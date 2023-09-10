import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogWithSidebarComponent } from './catalog-with-sidebar.component';

describe('CatalogWithSidebarComponent', () => {
  let component: CatalogWithSidebarComponent;
  let fixture: ComponentFixture<CatalogWithSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogWithSidebarComponent]
    });
    fixture = TestBed.createComponent(CatalogWithSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
