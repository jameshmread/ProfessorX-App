import { IMutationResult } from "../../../interfaces/IMutationResult";

export class StubMutationResult {
      public static mutationResultSuccessKilled: IMutationResult = {
            lineNumber: 3,
            mutantKilled: true,
            origionalCode: "a = x + y",
            mutatedCode: "a = x - y;",
            mutationAttemptFailure: "N/A",
            numFailedTests: 3,
            numPassedTests: 1,
            srcFileName: "StubFileName.ts",
            srcFilePath: "Stub/FilePath/",
            testFilePath: "Stub/Test/FilePath/"
      };

      public static mutationResultSuccessSurvived: IMutationResult = {
            lineNumber: 3,
            mutantKilled: false,
            origionalCode: "a = x + y",
            mutatedCode: "a = x - y;",
            mutationAttemptFailure: "N/A",
            numFailedTests: 0,
            numPassedTests: 4,
            srcFileName: "StubFileName.ts",
            srcFilePath: "Stub/FilePath/",
            testFilePath: "Stub/Test/FilePath/"
      };

      public static mutationResultFail: IMutationResult = {
            srcFilePath: "./testProject/src/",
            srcFileName: "HelloWorld.ts",
            testFilePath: "N/A",
            mutantKilled: "N/A",
            numFailedTests: "N/A",
            numPassedTests: "N/A",
            mutationAttemptFailure: {
                  attemptedMutation: "37 => -",
                  nodeToBeMutated: {
                        syntaxType: 37,
                        positions: {
                              pos: 91,
                              end: 93
                        },
                        parentFileName: "HelloWorld.ts"
                  }
            },
            lineNumber: 2,
            origionalCode: "return a + b;",
            mutatedCode: "return a + b;"
      };
}
