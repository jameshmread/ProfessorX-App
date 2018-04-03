import { Component, OnInit, OnChanges, Output, EventEmitter } from "@angular/core";
import { MutationResultsService } from "../../../services/mutation-results.service";
import { Filters } from "../../../preProcessors/Filters";
import { ResultFields } from "../../../../enums/ResultFields";
import { IndividualMutationService } from "../../../services/individual-mutation.service";
import { NavLinks } from "../../../../enums/NavLinks";
import { IndividualMutationComponent } from "../individual-mutation.component";

@Component({
  selector: "app-mutation-filters",
  templateUrl: "./mutation-filters.component.html",
  styleUrls: ["./mutation-filters.component.css"]
})


export class MutationFiltersComponent implements OnInit {

  public srcFiles: Array<string>;
  public filters: Array<string>;

  public selectedSourceFile: string;
  public selectedFilter: string;

  constructor (
    private resultsService: MutationResultsService,
    private individualService: IndividualMutationService
  ) { }

  public ngOnInit () {
    this.setDropdownListValues();
    this.setDefaultDropdownValues();

    this.individualService.setCurrentFilter({
      fileName: this.selectedSourceFile,
    mutationType: this.selectedFilter});
  }

  public setSelectedsourceFile () {
    this.individualService.setCurrentFileName(this.selectedSourceFile);
  }

  public setSelectedFilterType () {
    this.individualService.setCurrentMutationType(this.selectedFilter);
  }

  private setDropdownListValues () {
    this.srcFiles = ["All Files"].concat(
    Filters.removeArrayDuplicates(
      Filters.getIndividualProperty(
        this.resultsService.getAllSurvivingMutants(), ResultFields.srcFileName)));

    this.filters = ["All Mutator Types"].concat(
      Filters.removeArrayDuplicates(
      this.resultsService.getAllSurvivingMutants().map((item) => item.mutationType)));
  }

  private setDefaultDropdownValues () {
    this.selectedSourceFile = this.srcFiles[0];
    this.selectedFilter = this.filters[0];
  }
}
