import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IndividualMutationComponent } from "./individual-mutation.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("IndividualMutationComponent", () => {
  let component: IndividualMutationComponent;
  let fixture: ComponentFixture<IndividualMutationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualMutationComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
