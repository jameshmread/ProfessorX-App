import { MutationResultsService } from "../../../services/mutation-results.service";
import * as mockito from "ts-mockito";
import { ProgressBarComponent } from "./progress-bar.component";

describe("ProgressBarComponent", () => {
  let component: ProgressBarComponent;
  const mockResultsService = mockito.mock(MutationResultsService);


  beforeEach(() => {
    component = new ProgressBarComponent(mockResultsService);
  });

  it("should be created", () => {
    expect(component).toBeDefined();
  });
});
