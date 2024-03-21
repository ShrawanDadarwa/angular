import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStyleComponent } from './login-style.component';

describe('LoginStyleComponent', () => {
  let component: LoginStyleComponent;
  let fixture: ComponentFixture<LoginStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
