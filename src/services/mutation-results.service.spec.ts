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

  it("should return 2 when given 2 killed mutants",
  inject([MutationResultsService], (service: MutationResultsService) => {
    service.setAllMutationResults([
      StubMutationResult.mutationResultSuccessKilled,
      StubMutationResult.mutationResultSuccessKilled1,
      StubMutationResult.mutationResultSuccessSurvived,
      StubMutationResult.mutationResultFail]);
    expect(service.getAllKilledMutants().length).toEqual(2);
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
    expect(service.getAllSurvivingMutants().length).toEqual(1);
  }));

  it("should return 2 when having 2 surviving mutant results",
  inject([MutationResultsService], (service: MutationResultsService) => {
    service.setAllMutationResults([
      StubMutationResult.mutationResultSuccessSurvived,
      StubMutationResult.mutationResultSuccessSurvived]);
    expect(service.getAllSurvivingMutants().length).toEqual(2);
  }));

  it("should return a surviving mutant result object when given one",
  inject([MutationResultsService], (service: MutationResultsService) => {
    service.setAllMutationResults([
      StubMutationResult.mutationResultSuccessKilled,
      StubMutationResult.mutationResultSuccessSurvived,
      StubMutationResult.mutationResultFail]);
    expect(service.getAllSurvivingMutants()[0]).toEqual(StubMutationResult.mutationResultSuccessSurvived);
  }));

  it("should return 0 when given no failed mutations",
  inject([MutationResultsService], (service: MutationResultsService) => {
    service.setAllMutationResults([
      StubMutationResult.mutationResultSuccessSurvived,
      StubMutationResult.mutationResultSuccessSurvived]);
    expect(service.getFailedMutationAttempts().length).toEqual(0);
  }));

  it("should return 1 when given a failed mutation",
  inject([MutationResultsService], (service: MutationResultsService) => {
    service.setAllMutationResults([
      StubMutationResult.mutationResultSuccessSurvived,
      StubMutationResult.mutationResultFail,
      StubMutationResult.mutationResultSuccessSurvived]);
    expect(service.getFailedMutationAttempts().length).toEqual(1);
  }));

  it("should return a failed mutation result when given one",
  inject([MutationResultsService], (service: MutationResultsService) => {
    service.setAllMutationResults([
      StubMutationResult.mutationResultSuccessSurvived,
      StubMutationResult.mutationResultFail,
      StubMutationResult.mutationResultSuccessSurvived]);
    expect(service.getFailedMutationAttempts()[0]).toEqual(StubMutationResult.mutationResultFail);
  }));

  it("should return survivors from a particular line number 3",
  inject([MutationResultsService], (service: MutationResultsService) => {
    service.setAllMutationResults(StubMutationResult.allResults);
    const expected = [
      StubMutationResult.mutationResultSuccessSurvived,
      StubMutationResult.mutationResultSuccessSurvived1
    ];
    expect(service.getSurvivorsByFilter("lineNumber", 3)).toEqual(expected);
  }));

  it("should return survivors from a particular line number 33",
  inject([MutationResultsService], (service: MutationResultsService) => {
    service.setAllMutationResults(StubMutationResult.allResults);
    const expected = [
      StubMutationResult.mutationResultSuccessSurvived2
    ];
    expect(service.getSurvivorsByFilter("lineNumber", 33)).toEqual(expected);
  }));

  it("should return survivors from a particular filename",
  inject([MutationResultsService], (service: MutationResultsService) => {
    service.setAllMutationResults(StubMutationResult.allResults);
    const expected = [
      StubMutationResult.mutationResultSuccessSurvived
    ];
    expect(service.getSurvivorsByFilter("srcFileName", "StubFileName.ts")).toEqual(expected);
  }));
});
