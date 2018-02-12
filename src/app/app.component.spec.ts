import * as mockito from "ts-mockito";

import { AppComponent } from "./app.component";
import { MutationResultsService } from "../services/mutation-results.service";

describe("AppComponent", () => {
  let component;
  beforeEach(() => {
    component = new AppComponent(mockito.mock(MutationResultsService));
  });

  it("", () => {
  });
});
