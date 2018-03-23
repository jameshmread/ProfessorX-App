import { IMutationResult } from "../../../interfaces/IMutationResult";

export class StubMutationResult {
      public static mutationResultSuccessKilled: IMutationResult = {
            origionalCode: null,
            mutatedCode: null,
            mutationAttemptFailure: null, srcFileName: "StubFileName.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultSuccessKilled1: IMutationResult = {
            origionalCode: null,
            mutatedCode: null,
            mutationAttemptFailure: null, srcFileName: "StubFileName.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultSuccessSurvived: IMutationResult = {
            origionalCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutatedCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutationAttemptFailure: null, srcFileName: "StubFileName.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultSuccessSurvived1: IMutationResult = {
            origionalCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutatedCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutationAttemptFailure: null, srcFileName: "StubFileNamesuccess.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultSuccessSurvived2: IMutationResult = {
            origionalCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutatedCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutationAttemptFailure: null, srcFileName: "SuccessSurvive.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultFail: IMutationResult = {
            srcFilePath: "./testProject/src/", srcFileName: "HelloWorld.ts", testFilePath: null,
            mutationAttemptFailure: { attemptedMutation: "37 => -", nodeToBeMutated: {
                        syntaxType: 37, positions: {pos: 91, end: 93},
                        parentFileName: "HelloWorld.ts"}
            }, origionalCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutatedCode: null
      };
      public static allResults = [
            StubMutationResult.mutationResultSuccessKilled, StubMutationResult.mutationResultSuccessKilled1,
            StubMutationResult.mutationResultSuccessSurvived, StubMutationResult.mutationResultSuccessSurvived1,
            StubMutationResult.mutationResultSuccessSurvived2, StubMutationResult.mutationResultFail];
}
