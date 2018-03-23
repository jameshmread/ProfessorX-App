import { TestBed, async } from "@angular/core/testing";
import { IRunnerConfig } from "../../interfaces/IRunnerConfig";

import { GatherData } from "./GatherData";
import * as data from "./outputStoreData.json";
import * as newData from "../testUtilities/stubs/unlabeledData.json";
import { IMutationResult } from "../../interfaces/IMutationResult";

describe("Gather Data", () => {
      let gatherData;
      const mutationResultSuccess: IMutationResult = {
            srcFilePath: "./testProject/src/",
            srcFileName: "HelloWorld.ts",
            testFilePath: "./testProject/src/HelloWorld.ts1C1396.spec.m.ts",
            origionalCode: [{lineText: "return a + b;", lineNumber: 2}],
            mutatedCode: [{lineText: "return a / b;", lineNumber: 2}],
            mutationAttemptFailure: undefined
      };

      const mutationResultFail: IMutationResult = {
            srcFilePath: "./testProject/src/",
            srcFileName: "HelloWorld.ts",
            testFilePath: undefined,
            origionalCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutatedCode: [{lineText: "return a / b;", lineNumber: 1}],
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

      it("should not have a null num passed tests element", () => {
            const actual: Array<IMutationResult> = gatherData.getResultsArray();
            expect(actual[0].origionalCode).not.toBeUndefined();
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

      it("mutant attempt failure should be defined with successful mutation", () => {
            const actual: IMutationResult = gatherData.fillNonApplicableFields(mutationResultSuccess);
            expect(actual.mutationAttemptFailure).toBeDefined();
      });

      it("should return an array of length 5", () => {
            const actual = gatherData.getDuration();
            expect(actual.length).toEqual(5);
      });
});
