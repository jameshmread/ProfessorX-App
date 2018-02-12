import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MutationFiltersComponent } from "./mutation-filters.component";
import { mock } from "ts-mockito/lib/ts-mockito";
import { MutationResultsService } from "../../../services/mutation-results.service";

describe("MutationFiltersComponent", () => {

      let mfc: MutationFiltersComponent;
      beforeEach( () => {
            mfc = new MutationFiltersComponent(mock(MutationResultsService));
      });

      it("should be created", () => {
            expect(mfc).toBeTruthy();
      });
});
