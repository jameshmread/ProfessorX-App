import { Component, OnInit } from "@angular/core";
import { MutationResultsService } from "../../../services/mutation-results.service";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.css"]
})
export class ProgressBarComponent implements OnInit {

  private mutantsSurvived: number;
  private mutantsKilled: number;
  private failedMutations: number;
  private totalNumber: number;
  constructor (private mResults: MutationResultsService) { }

  public ngOnInit () {
    this.totalNumber = this.mResults.getAllMutationResults().length;
    this.mutantsSurvived = (this.mResults.getAllSurvivingMutants().length / this.totalNumber) * 100;
    this.mutantsKilled = (this.mResults.getAllKilledMutants().length / this.totalNumber ) * 100;
    this.failedMutations = (this.mResults.getFailedMutationAttempts().length / this.totalNumber ) * 100;
  }

}
