import { async, ComponentFixture, TestBed, inject } from "@angular/core/testing";

import { MutationFailures } from "./mutation-failures.component";
import { MutationResultsService } from "../../services/mutation-results.service";
import { StubMutationResult } from "../../testUtilities/stubs/StubMutationResult";
import { mock, when } from "ts-mockito/lib/ts-mockito";

describe("Mutation failures", () => {
  let component: MutationFailures;
  const mockService: MutationResultsService = mock(MutationResultsService);


  beforeEach(() => {
    component = new MutationFailures(mockService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
