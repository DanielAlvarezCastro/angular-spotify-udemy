import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template:'<img appImgBroken [src] ="srcMock">'
})

class TestComponent {
  public srcMock = null;
}


describe('ImgBrokenDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[
        TestComponent,
        ImgBrokenDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  })


  it('should create an instance', () => {
    const mockElement = new ElementRef('');
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('should create an instance of TestComponent', () => {
    expect(component).toBeTruthy();
  })

});
