import { Component, OnInit } from "@angular/core";
import { MutationResultsService } from "../../../services/mutation-results.service";
import { Filters } from "../../../preProcessors/Filters";

@Component({
  selector: "app-mutated-files-summary",
  templateUrl: "./mutated-files-summary.component.html",
  styleUrls: ["./mutated-files-summary.component.css"]
})
export class MutatedFilesSummaryComponent implements OnInit {

  public sourceFiles;

  constructor (private mResults: MutationResultsService) { }

  public ngOnInit () {
    this.sourceFiles = Filters.removeArrayDuplicates(this.mResults.getSummaryFiles());
  }

}
