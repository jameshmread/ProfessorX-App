export interface IMutationResult {
      srcFilePath: string;
      srcFileName: string;
      testFilePath: string;
      lineNumber: number;
      origionalCode: Array<string>;
      mutatedCode: Array<string>;
      numPassedTests: number | string;
      numFailedTests: number | string;
      mutantKilled: boolean | string;
      mutationAttemptFailure: Object;
}
