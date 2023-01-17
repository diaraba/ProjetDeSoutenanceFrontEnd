import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppuifinrecstructurePage } from './appuifinrecstructure.page';

describe('AppuifinrecstructurePage', () => {
  let component: AppuifinrecstructurePage;
  let fixture: ComponentFixture<AppuifinrecstructurePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppuifinrecstructurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppuifinrecstructurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
