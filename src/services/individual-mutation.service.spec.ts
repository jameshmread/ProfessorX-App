import { TestBed, inject } from "@angular/core/testing";

import { IndividualMutationService, IFilterType } from "./individual-mutation.service";

describe("IndividualMutationService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndividualMutationService]
    });
  });

  it("should be created", inject([IndividualMutationService], (service: IndividualMutationService) => {
    expect(service).toBeTruthy();
  }));

  it("should return the same filter object",
  inject([IndividualMutationService], (service: IndividualMutationService) => {
    const newFilter: IFilterType = {fileName: "fileName", mutationType: "type"};
    service.setCurrentFilter(newFilter);
    expect(service.currentFilter).toEqual(newFilter);
  }));

  it("should return the filter object with new altered attribute + old unchanged attribute",
  inject([IndividualMutationService], (service: IndividualMutationService) => {
    const newFilter: IFilterType = {fileName: "fileName", mutationType: "type"};
    service.currentFilter = newFilter;
    service.setCurrentFileName("new file name");
    const expected: IFilterType = {fileName: "new file name", mutationType: "type"};
    expect(service.currentFilter).toEqual(expected);
  }));
});
