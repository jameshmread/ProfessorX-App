import { Component, OnInit } from "@angular/core";
import { MutationResultsService } from "../../../services/mutation-results.service";
import { Filters } from "../../../preProcessors/Filters";

@Component({
  selector: "app-mutated-files-summary",
  templateUrl: "./mutated-files-summary.component.html",
  styleUrls: ["./mutated-files-summary.component.css"]
})
export class MutatedFilesSummaryComponent implements OnInit {

  public sourceFileNames;
  public survived;
  public total;
  constructor (private mResults: MutationResultsService) { }

  public ngOnInit () {
    this.sourceFileNames = this.mResults.getSummaryFiles().files;
    this.survived = this.mResults.getSummaryFiles().mutantsSurvivedForEach;
    this.total = this.mResults.getSummaryFiles().totalMutationsForEach;
  }

}
