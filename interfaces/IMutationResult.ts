export interface IMutationResult {
      srcFilePath: string;
      srcFileName: string;
      testFilePath: string;
      originalCode: Array<{lineNumber: number, lineText: string}>;
      mutatedCode: Array<{lineNumber: number, lineText: string}>;
      mutationAttemptFailure?: Object;
      mutationType: string;
      targetNode: string;
}
