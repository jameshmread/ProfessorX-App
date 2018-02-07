export interface IMutationResult {
      srcFilePath: string;
      srcFileName: string;
      testFilePath: string;
      lineNumber: number;
      origionalCode: string;
      mutatedCode: string;
      numPassedTests: number;
      numFailedTests: number;
      mutantKilled: boolean;
      mutationAttemptFailure: Object;
}
