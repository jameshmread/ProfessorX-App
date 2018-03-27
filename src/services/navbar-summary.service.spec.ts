import { TestBed, inject } from "@angular/core/testing";

import { NavbarSummaryService } from "./navbar-summary.service";

describe("NavbarSummaryService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavbarSummaryService]
    });
  });

  it("should be created", inject([NavbarSummaryService], (service: NavbarSummaryService) => {
    expect(service).toBeTruthy();
  }));
});
