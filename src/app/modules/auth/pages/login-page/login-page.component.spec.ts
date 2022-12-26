import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule
    ],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Form should return invalid', () => {

    //Arrange
    const mockCredentials = {
      email: '0x0x0x0x0x0',
      password: '1111111111111111111111111'
    }
    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    //Act
    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    //Assert
    expect(component.formLogin.invalid).toEqual(true);
  });

  it('form should retunr valid', () => {

    //Arrange
    const mockCredentials = {
      email: 'test@test.com',
      password: '12345678'
    }

    const emailForm: any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    //Act
    emailForm.setValue(mockCredentials.email);
    passwordForm.setValue(mockCredentials.password);

    //Assert
    expect(component.formLogin.invalid).toEqual(false);
  });

  it('Button element should contain "Iniciar sesión"', () => {

    const elementRef = fixture.debugElement.query(By.css('.form-action button'));
    const getInnerText = elementRef.nativeElement.innerText;

    expect(getInnerText).toEqual('Iniciar sesión');

  })
});
