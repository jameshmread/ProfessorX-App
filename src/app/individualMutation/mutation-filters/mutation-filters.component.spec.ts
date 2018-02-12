import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MutationFiltersComponent } from "./mutation-filters.component";

describe("MutationFiltersComponent", () => {

      let mfc: MutationFiltersComponent;
      beforeEach( () => {
            mfc = new MutationFiltersComponent();
      });

      it("should be created", () => {
            expect(mfc).toBeTruthy();
      });
});
