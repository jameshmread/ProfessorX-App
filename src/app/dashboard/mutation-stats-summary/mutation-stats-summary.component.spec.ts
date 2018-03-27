import { mock } from "ts-mockito";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MutationStatsSummaryComponent } from "./mutation-stats-summary.component";
import { MutationResultsService } from "../../../services/mutation-results.service";
import { StubMutationResult } from "../../../testUtilities/stubs/StubMutationResult";
import { NavbarSummaryService } from "../../../services/navbar-summary.service";

describe("MutationStatsSummaryComponent", () => {
  let mssc: MutationStatsSummaryComponent;
  const mockMResultService = mock(MutationResultsService);
  const mockNavService = mock(NavbarSummaryService);

  beforeEach(() => {
    mockMResultService.setAllMutationResults(StubMutationResult.allResults);
    mssc = new MutationStatsSummaryComponent(mockMResultService, mockNavService);
  });

  it("should create", () => {
    expect(mssc).toBeTruthy();
  });
});
