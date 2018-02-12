import { MutatedFilesSummaryComponent } from "./mutated-files-summary.component";
import { MutationResultsService } from "../../../services/mutation-results.service";
import { StubMutationResult } from "../../../testUtilities/stubs/StubMutationResult";
import { mock } from "ts-mockito/lib/ts-mockito";

describe("MutatedFilesSummaryComponent", () => {
  let component: MutatedFilesSummaryComponent;
  const service = mock(MutationResultsService);

  beforeEach(() => {
    component = new MutatedFilesSummaryComponent(service);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
