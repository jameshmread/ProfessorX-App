import { IRunnerConfig } from "../../interfaces/IRunnerConfig";
import { IMutationResult } from "../../interfaces/IMutationResult";
import { ISummary } from "../../interfaces/ISummary";
import { IMutationScoresPerFile } from "../../interfaces/IMutationScoresPerFile";

import { InputOrganiser } from "./InputOrganiser";
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
            // i begins at 1 because runner stats are at 0
            for (let i = 1; i < Object.keys(this.inputData).length; i++) {
                  this.inputData[i].forEach((result) => {
                  result = this.fillNonApplicableFields(result);
                  resultsArray.push({
                        srcFilePath: result["SRC_FILE_PATH"],
                        srcFileName: result["SRC_FILE"],
                        testFilePath: result["testFilePath"],
                              originalCode: result["originalCode"],
                        mutatedCode: result["mutatedCode"],
                        mutationAttemptFailure: result["mutationAttemptFailure"],
                        mutationType: result["mutationType"],
                        targetNode: result["targetNode"]
                  });
            });
            }
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

      public getSummaryFileList (): IMutationScoresPerFile {
            return this.inputData[0]["scoresPerFile"];
      }

      public getOverallScores (): ISummary {
            return this.inputData[0]["overallScores"];
      }
}
