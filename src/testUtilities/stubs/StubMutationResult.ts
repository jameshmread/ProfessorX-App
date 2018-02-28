import { IMutationResult } from "../../../interfaces/IMutationResult";

export class StubMutationResult {
      public static mutationResultSuccessKilled: IMutationResult = {
            lineNumber: 3, mutantKilled: true, origionalCode: ["a = x + y"], mutatedCode: ["a = x - y;"],
            mutationAttemptFailure: "N/A", numFailedTests: 3, numPassedTests: 1, srcFileName: "StubFileName.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultSuccessKilled1: IMutationResult = {
            lineNumber: 35, mutantKilled: true, origionalCode: ["return true;"], mutatedCode: ["return false;"],
            mutationAttemptFailure: "N/A", numFailedTests: 1, numPassedTests: 0, srcFileName: "StubFileName.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultSuccessSurvived: IMutationResult = {
            lineNumber: 3, mutantKilled: false, origionalCode: ["a = x + y"], mutatedCode: ["a = x - y;"],
            mutationAttemptFailure: "N/A", numFailedTests: 0, numPassedTests: 4, srcFileName: "StubFileName.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultSuccessSurvived1: IMutationResult = {
            lineNumber: 3,
            mutantKilled: false, origionalCode: ["a = x + y"], mutatedCode: ["a = x * y;"],
            mutationAttemptFailure: "N/A", numFailedTests: 0, numPassedTests: 4, srcFileName: "StubFileNamesuccess.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultSuccessSurvived2: IMutationResult = {
            lineNumber: 33, mutantKilled: false, origionalCode: ["a = x + y"], mutatedCode: ["a = x / y;"],
            mutationAttemptFailure: "N/A", numFailedTests: 0, numPassedTests: 4, srcFileName: "SuccessSurvive.ts",
            srcFilePath: "Stub/FilePath/", testFilePath: "Stub/Test/FilePath/"
      };
      public static mutationResultFail: IMutationResult = {
            srcFilePath: "./testProject/src/", srcFileName: "HelloWorld.ts", testFilePath: "N/A", mutantKilled: "N/A",
            numFailedTests: "N/A", numPassedTests:
            "N/A", mutationAttemptFailure: { attemptedMutation: "37 => -", nodeToBeMutated: {
                        syntaxType: 37, positions: {pos: 91, end: 93},
                        parentFileName: "HelloWorld.ts"}
            }, lineNumber: 2, origionalCode: ["return a + b;"], mutatedCode: ["return a + b;"]
      };
      public static allResults = [
            StubMutationResult.mutationResultSuccessKilled, StubMutationResult.mutationResultSuccessKilled1,
            StubMutationResult.mutationResultSuccessSurvived, StubMutationResult.mutationResultSuccessSurvived1,
            StubMutationResult.mutationResultSuccessSurvived2, StubMutationResult.mutationResultFail];
}
