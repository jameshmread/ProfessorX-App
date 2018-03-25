import { IRunnerConfig } from "../../interfaces/IRunnerConfig";
import { IMutationResult } from "../../interfaces/IMutationResult";
import { IMutationScoresPerFile } from "../../interfaces/ImutationScoresPerFile";

export abstract class InputOrganiser {
      constructor (protected inputData: Object) {}
      public abstract getRunnerConfig (): IRunnerConfig;
      public abstract getResultsArray (): Array<IMutationResult>;
      public abstract getDuration (): Object;
      public abstract getSummaryFileList () : IMutationScoresPerFile;
      public abstract getOverallScores () : Object;
}
