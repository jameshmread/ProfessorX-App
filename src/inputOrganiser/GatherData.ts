import { InputOrganiser } from "./InputOrganiser";
import { IRunnerConfig } from "../../interfaces/IRunnerConfig";
import { IMutationResult } from "../../interfaces/IMutationResult";
import * as data from "../app/devData.json";

export class GatherData extends InputOrganiser {
      constructor (){
            super(data);
      }
      public getRunnerConfig (): IRunnerConfig {
            return {
                  runnerName: this.inputData[0]["runner"],
                  runnerConfig: this.inputData[0]["config"]
            };
      }
      public getResultsArray (): Array<IMutationResult> {
            const resultsArray = new Array<IMutationResult>();
            this.inputData[1].forEach((result) => {
                  result = this.fillNonApplicableFields(result);
                  resultsArray.push({
                  srcFilePath: result["SRC_FILE_PATH"],
                  srcFileName: result["SRC_FILE"],
                  testFilePath: result["testFilePath"],
                  lineNumber: result["lineNumber"],
                  origionalCode: result["origionalCode"],
                  mutatedCode: result["mutatedCode"],
                  numPassedTests: result["numberPassedTests"],
                  numFailedTests: result["numberFailedTests"],
                  mutantKilled: result["mutantKilled"],
                  mutationAttemptFailure: result["mutationAttemptFailure"]
                  });
            });
            return resultsArray;
      }
      public fillNonApplicableFields (result: IMutationResult) {
            for (const element in result) {
                  if (result[element] === void 0) {
                        result[element] = "N/A";
                  }
            }
            return result;
      }

      public getDuration (): Array<number> {
            const duration = [];
            Object.keys(this.inputData[0]["duration"]).forEach((timeDivision) => {
              duration.push(this.inputData[0]["duration"][timeDivision]);
            });
            return duration;
      }
}
