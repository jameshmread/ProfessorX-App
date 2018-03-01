import { IMutationResult } from "../../../interfaces/IMutationResult";

export class StubMutationResult {
      public static mutationResultSuccessKilled: IMutationResult = {
            mutantKilled: true, origionalCode: [{lineText: "a = x + y", lineNumber: 1}],
            mutatedCode: [{lineText: "a = x - y", lineNumber: 1}],
            mutationAttemptFailure: "N/A", numFailedTests: 3, numPassedTests: 1, srcFileName: "StubFileName.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultSuccessKilled1: IMutationResult = {
            mutantKilled: true, origionalCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutatedCode: [{lineText: "return false", lineNumber: 1}],
            mutationAttemptFailure: "N/A", numFailedTests: 1, numPassedTests: 0, srcFileName: "StubFileName.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultSuccessSurvived: IMutationResult = {
            mutantKilled: false, origionalCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutatedCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutationAttemptFailure: "N/A", numFailedTests: 0, numPassedTests: 4, srcFileName: "StubFileName.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultSuccessSurvived1: IMutationResult = {
            mutantKilled: false, origionalCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutatedCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutationAttemptFailure: "N/A", numFailedTests: 0, numPassedTests: 4, srcFileName: "StubFileNamesuccess.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultSuccessSurvived2: IMutationResult = {
            mutantKilled: false, origionalCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutatedCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutationAttemptFailure: "N/A", numFailedTests: 0, numPassedTests: 4, srcFileName: "SuccessSurvive.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultFail: IMutationResult = {
            srcFilePath: "./testProject/src/", srcFileName: "HelloWorld.ts", testFilePath: "N/A", mutantKilled: "N/A",
            numFailedTests: "N/A", numPassedTests:
            "N/A", mutationAttemptFailure: { attemptedMutation: "37 => -", nodeToBeMutated: {
                        syntaxType: 37, positions: {pos: 91, end: 93},
                        parentFileName: "HelloWorld.ts"}
            }, origionalCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutatedCode: [{lineText: "return a + b;", lineNumber: 1}]
      };
      public static allResults = [
            StubMutationResult.mutationResultSuccessKilled, StubMutationResult.mutationResultSuccessKilled1,
            StubMutationResult.mutationResultSuccessSurvived, StubMutationResult.mutationResultSuccessSurvived1,
            StubMutationResult.mutationResultSuccessSurvived2, StubMutationResult.mutationResultFail];
}
