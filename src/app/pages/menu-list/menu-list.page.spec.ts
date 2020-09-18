import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuListPage } from './menu-list.page';

describe('MenuListPage', () => {
  let component: MenuListPage;
  let fixture: ComponentFixture<MenuListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
