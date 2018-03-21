import { IRunnerConfig } from "../../interfaces/IRunnerConfig";
import { IMutationResult } from "../../interfaces/IMutationResult";

export abstract class InputOrganiser {
      constructor (protected inputData: Object) {}
      public abstract getRunnerConfig (): IRunnerConfig;
      public abstract getResultsArray (): Array<IMutationResult>;
      public abstract getDuration (): Object;
      public abstract getSummaryFileList () : Array<Object>;
      public abstract getOverallScores () : Object;
}
