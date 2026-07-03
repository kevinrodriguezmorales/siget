import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InnerToolbar } from './inner-toolbar';

describe('InnerToolbar', () => {
  let component: InnerToolbar;
  let fixture: ComponentFixture<InnerToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerToolbar],
    }).compileComponents();

    fixture = TestBed.createComponent(InnerToolbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
