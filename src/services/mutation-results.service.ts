import { Injectable } from "@angular/core";
import { IMutationResult } from "../../interfaces/IMutationResult";
import { IRunnerConfig } from "../../interfaces/IRunnerConfig";

@Injectable()
export class MutationResultsService {

  private static mutationResults: Array<IMutationResult>;
  private testRunnerConfig: IRunnerConfig;
  constructor () {

  }

  public setAllMutationResults (results: Array<IMutationResult>): void {
    MutationResultsService.mutationResults = results;
  }

  public setTestRunnerConfig (runnerConfig: IRunnerConfig): void {
    this.testRunnerConfig = runnerConfig;
  }

  public getAllMutationResults (): Array<IMutationResult> {
    return MutationResultsService.mutationResults;
  }

  public getTestRunnerConfig (): IRunnerConfig {
    return this.testRunnerConfig;
  }

  public getAllSurvivingMutants (): Array<IMutationResult> {
    return MutationResultsService.mutationResults.filter((result) => result.mutantKilled === false);
  }

  public getAllKilledMutants (): Array<IMutationResult> {
    return MutationResultsService.mutationResults.filter((result) => result.mutantKilled === true);
  }

  public getAllFailedMutationAttempts (): Array<IMutationResult> {
    return MutationResultsService.mutationResults.filter((result) =>
      result.mutationAttemptFailure === Object(result.mutationAttemptFailure));
  }

  public getSurvivorsByFilter (attributeToFilterBy: string, value: any) {
    return this.getAllSurvivingMutants()
    .filter((result) => result[attributeToFilterBy] === value);
  }
}
