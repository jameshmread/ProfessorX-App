export interface IMutationResult {
      srcFilePath: string;
      srcFileName: string;
      testFilePath: string;
      lineNumber: number;
      origionalCode: string;
      mutatedCode: string;
      numPassedTests: number | string;
      numFailedTests: number | string;
      mutantKilled: boolean | string;
      mutationAttemptFailure: Object;
}
