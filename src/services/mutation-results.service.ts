import { Injectable } from "@angular/core";
import { IMutationResult } from "../../interfaces/IMutationResult";
import { IRunnerConfig } from "../../interfaces/IRunnerConfig";

@Injectable()
export class MutationResultsService {

  private mutationResults: Array<IMutationResult>;
  private testRunnerConfig: IRunnerConfig;
  constructor () {

  }

  public setAllMutationResults (results: Array<IMutationResult>): void {
    this.mutationResults = results;
  }

  public setTestRunnerConfig (runnerConfig: IRunnerConfig): void {
    this.testRunnerConfig = runnerConfig;
  }

  public getAllMutationResults (): Array<IMutationResult> {
    return this.mutationResults;
  }

  public getTestRunnerConfig (): IRunnerConfig {
    return this.testRunnerConfig;
  }

  public getAllSurvivingMutants (): Array<IMutationResult> {
    return this.mutationResults.filter((result) => result.mutantKilled === false);
  }
}
