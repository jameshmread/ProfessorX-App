import { TestBed, async } from "@angular/core/testing";
import { IRunnerConfig } from "../../interfaces/IRunnerConfig";

import { GatherData } from "./GatherData";
import * as data from "./outputStoreData.json";
import * as newData from "../testUtilities/stubs/unlabeledData.json";
import { IMutationResult } from "../../interfaces/IMutationResult";

describe("AppComponent", () => {
      let gatherData;
      const mutationResultSuccess: IMutationResult = {
            srcFilePath: "./testProject/src/",
            srcFileName: "HelloWorld.ts",
            testFilePath: "./testProject/src/HelloWorld.ts1C1396.spec.m.ts",
            lineNumber: 2,
            origionalCode: "return a + b;",
            mutatedCode: "return a / b;",
            numPassedTests: 3,
            numFailedTests: 1,
            mutantKilled: true,
            mutationAttemptFailure: undefined
      };

      const mutationResultFail: IMutationResult = {
            srcFilePath: "./testProject/src/",
            srcFileName: "HelloWorld.ts",
            testFilePath: undefined,
            lineNumber: 4,
            origionalCode: "return a + b;",
            mutatedCode: "return a / b;",
            numPassedTests: undefined,
            numFailedTests: undefined,
            mutantKilled: undefined,
            mutationAttemptFailure: {}
      };
      beforeEach(() => {
            gatherData = new GatherData();
      });

      it("should not have a null runner name element", () => {
            const actual: IRunnerConfig = gatherData.getRunnerConfig(newData);
            expect(actual.runnerName).not.toBeUndefined();
      });

      it("should not have a null runner config element", () => {
            const actual: IRunnerConfig = gatherData.getRunnerConfig(newData);
            expect(actual.runnerConfig).not.toBeUndefined();
      });

      it("should not have a null linenumber element", () => {
            const actual: Array<IMutationResult> = gatherData.getResultsArray();
            expect(actual[0].lineNumber).not.toBeUndefined();
      });

      it("should not have a null srcfile path element", () => {
            const actual: Array<IMutationResult> = gatherData.getResultsArray();
            expect(actual[0].srcFileName).not.toBeUndefined();
      });

      it("file name should not be changed with successful mutation", () => {
            const actual: IMutationResult = gatherData.fillNonApplicableFields(mutationResultSuccess);
            expect(actual.srcFileName).toEqual("HelloWorld.ts");
      });

      it("file name should not be changed with unsuccessful mutation", () => {
            const actual: IMutationResult = gatherData.fillNonApplicableFields(mutationResultFail);
            expect(actual.srcFileName).toEqual("HelloWorld.ts");
      });

      it("mutant killed should be defined with unsuccessful mutation", () => {
            const actual: IMutationResult = gatherData.fillNonApplicableFields(mutationResultFail);
            expect(actual.mutantKilled).toBeDefined();
      });

      it("mutant attempt failure should be defined with successful mutation", () => {
            const actual: IMutationResult = gatherData.fillNonApplicableFields(mutationResultSuccess);
            expect(actual.mutationAttemptFailure).toBeDefined();
      });

      it("should return an array of length 5", () => {
            const actual = gatherData.getDuration();
            expect(actual.length).toEqual(5);
      });

      it("should return 0d 0h 0m 1s 359ms", () => {
            const actual = gatherData.getDuration();
            const expected = [0, 0, 0, 1, 359];
            expect(actual).toEqual(expected);
      });
});
