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
  public score: Array<string> = [];
  public unMutatedSourceFiles: Array<string> = [];

  constructor (private mResults: MutationResultsService) { }

  public ngOnInit () {
    this.sourceFileNames = this.mResults.getSummaryFiles().files;
    this.survived = this.mResults.getSummaryFiles().mutantsSurvivedForEach;
    this.total = this.mResults.getSummaryFiles().totalMutationsForEach;

    this.getMutationScoreForEachFile();
    this.getUnmutatedSourceFiles();
    this.removeUnmutatedSourceFilesFromList();
  }

  public setMutationScoreColour (score: string) {
    if (score === null) {return; }
    const scoreNumber: number = Number(score.substring(0, score.length - 1));
    if (scoreNumber >= 70) {
      return { "background-color": "#00C851" };
    } else if (scoreNumber >= 50) {
      return {"background-color": "#ffbb33"};
    }
    return {"background-color": "#ff4444"};
  }

  private getUnmutatedSourceFiles (): any {
    this.sourceFileNames.forEach((file, index) => {
      if (this.total[index] === 0) {
        this.unMutatedSourceFiles.push(file);
      }
    });
  }

  private getMutationScoreForEachFile () {
    this.total.forEach((item, index) => {
      if (this.survived[index] === 0){
        this.score.push("100 %");
      } else {
        this.score.push((((this.total[index] - this.survived[index]) / this.total[index]) * 100).toFixed(2) + " %");
      }
  });
  }

  private removeUnmutatedSourceFilesFromList () {
    this.sourceFileNames.forEach((item, index, arr) => {
      if (this.unMutatedSourceFiles.indexOf(item) >= 0) {
        this.sourceFileNames[index] = null;
        this.survived[index] = null;
        this.total[index] = null;
        this.score[index] = null;
      }
    });
  }
}
