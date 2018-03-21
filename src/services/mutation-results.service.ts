import { Injectable } from "@angular/core";
import { IMutationResult } from "../../interfaces/IMutationResult";
import { IRunnerConfig } from "../../interfaces/IRunnerConfig";
import { ISummary } from "../../interfaces/ISummary";
import { IFileList } from "../../interfaces/IFileList";
@Injectable()
export class MutationResultsService {

  private mutationResults: Array<IMutationResult>;
  private testRunnerConfig: IRunnerConfig;
  private summaryFiles: Array<IFileList>;
  private overallScores: ISummary;

  constructor () {

  }

  public setAllMutationResults (results: Array<IMutationResult>): void {
    this.mutationResults = results;
  }

  public setTestRunnerConfig (runnerConfig: IRunnerConfig): void {
    this.testRunnerConfig = runnerConfig;
  }

  public setSummaryInfo (files: Array<IFileList>, overallScores: ISummary) {
    this.summaryFiles = files;
    this.overallScores = overallScores;
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

  public getAllKilledMutants (): Array<IMutationResult> {
    return this.mutationResults.filter((result) => result.mutantKilled === true);
  }

  public getFailedMutationAttempts (): Array<IMutationResult> {
    return this.mutationResults.filter((result) =>
      result.mutationAttemptFailure === Object(result.mutationAttemptFailure));
  }

  public getSurvivorsByFilter (attributeToFilterBy: string, value: any) {
    return this.getAllSurvivingMutants()
    .filter((result) => result[attributeToFilterBy] === value);
  }

  public getSummaryFiles (): Array<IFileList> {
    return this.summaryFiles;
  }

  public getOverallSummary (): ISummary {
    return this.overallScores;
  }
}
