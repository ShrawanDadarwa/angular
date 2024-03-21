import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTemStyComponent } from './login-tem-sty.component';

describe('LoginTemStyComponent', () => {
  let component: LoginTemStyComponent;
  let fixture: ComponentFixture<LoginTemStyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginTemStyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginTemStyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
