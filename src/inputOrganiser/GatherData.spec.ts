import { TestBed, async } from "@angular/core/testing";
import { IRunnerConfig } from "../../interfaces/IRunnerConfig";

import { GatherData } from "./GatherData";
import * as data from "./outputStoreData.json";
import * as newData from "../testUtilities/stubs/unlabeledData.json";
import { IMutationResult } from "../../interfaces/IMutationResult";

describe("AppComponent", () => {
      let gatherData;
      beforeEach(() => {
            gatherData = new GatherData();
      });

      it("should not have a null runner name element", () => {
            const actual: IRunnerConfig = gatherData.getRunnerConfig(newData);
            expect(actual.runnerName).not.toBeNull();
      });

      it("should not have a null runner config element", () => {
            const actual: IRunnerConfig = gatherData.getRunnerConfig(newData);
            expect(actual.runnerConfig).not.toBeNull();
      });

      it("should not have a null linenumber element", () => {
            const actual: Array<IMutationResult> = gatherData.getResultsArray();
            expect(actual[0].lineNumber).not.toBeNull();
      });
});
