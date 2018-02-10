import { TestBed, inject } from "@angular/core/testing";

import { MutationResultsService } from "./mutation-results.service";
import { StubMutationResult } from "../testUtilities/stubs/StubMutationResult";

describe("MutationResultsService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MutationResultsService]
    });
    const service: MutationResultsService = TestBed.get(MutationResultsService);
    service.setAllMutationResults([StubMutationResult.mutationResultSuccessKilled]);
    service.setTestRunnerConfig({runnerName: "", runnerConfig: {}});
  });

  it("should be created", inject([MutationResultsService], (service: MutationResultsService) => {
    expect(service).toBeTruthy();
  }));

  it("should not return undefined", inject([MutationResultsService], (service: MutationResultsService) => {
    expect(service.getAllMutationResults()).toBeDefined();
  }));

  it("should not return undefined", inject([MutationResultsService], (service: MutationResultsService) => {
    expect(service.getTestRunnerConfig()).toBeDefined();
  }));

  it("should return defined", inject([MutationResultsService], (service: MutationResultsService) => {
    expect(service.getAllSurvivingMutants()).toBeDefined();
  }));

  it("should return not null", inject([MutationResultsService], (service: MutationResultsService) => {
    expect(service.getAllSurvivingMutants()).not.toBeNull();
  }));

  it("should return 0 when no failed results occur",
  inject([MutationResultsService], (service: MutationResultsService) => {
    expect(service.getAllSurvivingMutants().length).toEqual(0);
  }));

  it("should return 1 when including a surviving mutant result",
  inject([MutationResultsService], (service: MutationResultsService) => {
    service.setAllMutationResults([
      StubMutationResult.mutationResultSuccessKilled,
      StubMutationResult.mutationResultSuccessSurvived,
      StubMutationResult.mutationResultFail]);
    console.log(service.getAllSurvivingMutants());
    expect(service.getAllSurvivingMutants().length).toEqual(1);
  }));

  it("should return 2 when having 2 surviving mutant results",
  inject([MutationResultsService], (service: MutationResultsService) => {
    service.setAllMutationResults([
      StubMutationResult.mutationResultSuccessSurvived,
      StubMutationResult.mutationResultSuccessSurvived]);
    console.log(service.getAllSurvivingMutants());
    expect(service.getAllSurvivingMutants().length).toEqual(2);
  }));


});
