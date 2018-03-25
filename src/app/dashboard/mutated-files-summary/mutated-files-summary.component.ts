import { Component, OnInit } from "@angular/core";
import { MutationResultsService } from "../../../services/mutation-results.service";
import { Filters } from "../../../preProcessors/Filters";

@Component({
  selector: "app-mutated-files-summary",
  templateUrl: "./mutated-files-summary.component.html",
  styleUrls: ["./mutated-files-summary.component.css"]
})
export class MutatedFilesSummaryComponent implements OnInit {

  public sourceFileNames: Array<string>;
  public survived: Array<number>;
  public total: Array<number>;

  public unMutatedSourceFiles: Array<string> = [];

  constructor (private mResults: MutationResultsService) { }

  public ngOnInit () {
    this.sourceFileNames = this.mResults.getSummaryFiles().files;
    this.survived = this.mResults.getSummaryFiles().mutantsSurvivedForEach;
    this.total = this.mResults.getSummaryFiles().totalMutationsForEach;
    this.getUnmutatedSourceFiles();
  }

  private getUnmutatedSourceFiles (): any {
    this.sourceFileNames.forEach((file, index) => {
      if (this.total[index] === 0) {
        this.unMutatedSourceFiles.push(file);
      }
    });
  }
}
