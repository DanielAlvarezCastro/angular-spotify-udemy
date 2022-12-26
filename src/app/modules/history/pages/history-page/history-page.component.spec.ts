import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HistoryPageComponent } from './history-page.component';
import { SharedModule } from '@shared/shared.module';
import { HistoryModule } from '@modules/history/history.module';

describe('HistoryPageComponent', () => {
  let component: HistoryPageComponent;
  let fixture: ComponentFixture<HistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HistoryModule //Daniel: I have some problems configuring the testing that course teacher didn't have. Pages components ask for the module of their childs components to be imported
        //Even when their child's module it's their own module. Don't know why :/
      ],
      declarations: [ HistoryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
