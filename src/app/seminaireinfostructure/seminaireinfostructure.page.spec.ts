import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeminaireinfostructurePage } from './seminaireinfostructure.page';

describe('SeminaireinfostructurePage', () => {
  let component: SeminaireinfostructurePage;
  let fixture: ComponentFixture<SeminaireinfostructurePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SeminaireinfostructurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeminaireinfostructurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
