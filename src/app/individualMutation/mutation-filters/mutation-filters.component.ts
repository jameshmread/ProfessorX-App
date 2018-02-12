import { Component, OnInit } from "@angular/core";
import { MutationResultsService } from "../../../services/mutation-results.service";
import { Filters } from "../../../preProcessors/Filters";
import { ResultFields } from "../../../../enums/ResultFields";

@Component({
  selector: "app-mutation-filters",
  templateUrl: "./mutation-filters.component.html",
  styleUrls: ["./mutation-filters.component.css"]
})


export class MutationFiltersComponent implements OnInit {

  public srcFiles: Array<string>;
  public filters: Array<string>;

  public selectedSourceFile = "Select";
  public selectedFilter = "Select";

  constructor (private resultsService: MutationResultsService) { }

  public ngOnInit () {
    this.srcFiles =
    Filters.removeArrayDuplicates(
    Filters.getIndividualProperty(
      this.resultsService.getAllSurvivingMutants(), ResultFields.srcFileName));

    this.filters = Object.keys(ResultFields);
  }
}
