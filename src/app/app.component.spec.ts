import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import * as data from "./outputStoreData.json";
import * as newData from "./newData.json";
import { MutationResultsService } from "../services/mutation-results.service";

describe("AppComponent", () => {
  let component;
  beforeEach(() => {
    component = new AppComponent(new MutationResultsService());
  });

  it("", () => {
  });
});
