import { IMutationResult } from "../../../interfaces/IMutationResult";

export class StubMutationResult {
      public static mutationResultSuccessKilled: IMutationResult = {
            mutationType: "",
            targetNode: "",
            origionalCode: null,
            mutatedCode: null,
            mutationAttemptFailure: undefined, srcFileName: "StubFileName.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultSuccessKilled1: IMutationResult = {
            mutationType: "",
            targetNode: "",
            origionalCode: null,
            mutatedCode: null,
            mutationAttemptFailure: undefined, srcFileName: "StubFileName.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultSuccessSurvived: IMutationResult = {
            mutationType: "",
            targetNode: "",
            origionalCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutatedCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutationAttemptFailure: undefined, srcFileName: "StubFileName.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultSuccessSurvived1: IMutationResult = {
            mutationType: "",
            targetNode: "",
            origionalCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutatedCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutationAttemptFailure: undefined, srcFileName: "StubFileNamesuccess.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultSuccessSurvived2: IMutationResult = {
            mutationType: "",
            targetNode: "",
            origionalCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutatedCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutationAttemptFailure: undefined, srcFileName: "SuccessSurvive.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultFail: IMutationResult = {
            mutationType: "",
            targetNode: "",
            srcFilePath: "./testProject/src/", srcFileName: "HelloWorld.ts", testFilePath: null,
            mutationAttemptFailure: { attemptedMutation: "37 => -", nodeToBeMutated: {
                        syntaxType: 37, positions: {pos: 91, end: 93},
                        parentFileName: "HelloWorld.ts"}
            }, origionalCode: [{lineText: "return a + b;", lineNumber: 1}],
            mutatedCode: undefined
      };
      public static allResults = [
            StubMutationResult.mutationResultSuccessKilled, StubMutationResult.mutationResultSuccessKilled1,
            StubMutationResult.mutationResultSuccessSurvived, StubMutationResult.mutationResultSuccessSurvived1,
            StubMutationResult.mutationResultSuccessSurvived2, StubMutationResult.mutationResultFail];
}
