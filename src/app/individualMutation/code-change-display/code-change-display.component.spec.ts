import { CodeChangeDisplayComponent } from "./code-change-display.component";
import { mock } from "ts-mockito/lib/ts-mockito";
import { MutationResultsService } from "../../../services/mutation-results.service";

describe("CodeChangeDisplayComponent", () => {
  let ccdc: CodeChangeDisplayComponent;

  beforeEach(() => {
    ccdc = new CodeChangeDisplayComponent(mock(MutationResultsService));
  });
});
