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

  it("should = 100 given 1 killed and 0 surviving", () => {
    mssc.killedMutants = 1;
    mssc.survivingMutants = 0;
    expect(mssc.setMutationScore()).toEqual(100);
  });

  it("should = 0 given 0 killed and 1 surviving", () => {
    mssc.killedMutants = 0;
    mssc.survivingMutants = 1;
    expect(mssc.setMutationScore()).toEqual(0);
  });

  it("should = 50 given 1 killed and 1 surviving", () => {
    mssc.killedMutants = 1;
    mssc.survivingMutants = 1;
    expect(mssc.setMutationScore()).toEqual(50);
  });

  it("should = 50 given 1 killed and 1 surviving", () => {
    mssc.killedMutants = 1;
    mssc.survivingMutants = 1;
    expect(mssc.setMutationScore()).toEqual(50);
  });

  it("should return 66.6 given 2 killed and 1 surviving", () => {
    mssc.killedMutants = 2;
    mssc.survivingMutants = 1;
    expect(mssc.setMutationScore()).toEqual(66.67);
  });
});
