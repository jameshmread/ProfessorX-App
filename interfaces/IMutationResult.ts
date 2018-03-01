export interface IMutationResult {
      srcFilePath: string;
      srcFileName: string;
      testFilePath: string;
      origionalCode: Array<{lineNumber: number, lineText: string}>;
      mutatedCode: Array<{lineNumber: number, lineText: string}>;
      numPassedTests: number | string;
      numFailedTests: number | string;
      mutantKilled: boolean | string;
      mutationAttemptFailure: Object;
}
