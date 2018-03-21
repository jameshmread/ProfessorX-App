import { mock } from "ts-mockito";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MutationStatsSummaryComponent } from "./mutation-stats-summary.component";
import { MutationResultsService } from "../../../services/mutation-results.service";
import { StubMutationResult } from "../../../testUtilities/stubs/StubMutationResult";

describe("MutationStatsSummaryComponent", () => {
  let mssc: MutationStatsSummaryComponent;
  const mockMResultService = mock(MutationResultsService);

  beforeEach(() => {
    mockMResultService.setAllMutationResults(StubMutationResult.allResults);
    mssc = new MutationStatsSummaryComponent(mockMResultService);
  });

  it("should create", () => {
    expect(mssc).toBeTruthy();
  });
});
