import { Injectable } from "@angular/core";
import { IMutationResult } from "../../interfaces/IMutationResult";
import { IRunnerConfig } from "../../interfaces/IRunnerConfig";
import { ISummary } from "../../interfaces/ISummary";
import { IMutationScoresPerFile } from "../../interfaces/IMutationScoresPerFile";

@Injectable()
export class MutationResultsService {

  private mutationResults: Array<IMutationResult>;
  private testRunnerConfig: IRunnerConfig;
  private summaryFiles: IMutationScoresPerFile;
  private overallScores: ISummary;

  constructor () {

  }

  public setAllMutationResults (results: Array<IMutationResult>): void {
    this.mutationResults = results;
  }

  public setTestRunnerConfig (runnerConfig: IRunnerConfig): void {
    this.testRunnerConfig = runnerConfig;
  }

  public setSummaryInfo (files: IMutationScoresPerFile, overallScores: ISummary) {
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
    return this.mutationResults.filter((result) =>
    result.mutatedCode !== null && result.mutationAttemptFailure === undefined);
  }

  public getAllKilledMutants (): Array<IMutationResult> {
    return this.mutationResults.filter((result) =>
    result.mutatedCode === null && result.mutationAttemptFailure === undefined);
  }

  public getFailedMutationAttempts (): Array<IMutationResult> {
    return this.mutationResults.filter((result) =>
      result.mutationAttemptFailure !== undefined);
  }

  public getSurvivorsByFilter (attributeToFilterBy: string, value: any) {
    if (value.toString().startsWith("All ")) {
      return this.getAllSurvivingMutants();
    }
    return this.getAllSurvivingMutants()
    .filter((result) => result[attributeToFilterBy] === value);
  }

  public getSummaryFiles (): IMutationScoresPerFile {
    return this.summaryFiles;
  }

  public getOverallSummary (): ISummary {
    return this.overallScores;
  }
}
