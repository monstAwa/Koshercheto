import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesAndDocuments } from './prices-and-documents';

describe('PricesAndDocuments', () => {
  let component: PricesAndDocuments;
  let fixture: ComponentFixture<PricesAndDocuments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricesAndDocuments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricesAndDocuments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
