import { Component, OnInit } from "@angular/core";
import { MutationResultsService } from "../../../services/mutation-results.service";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.css"]
})
export class ProgressBarComponent implements OnInit {

  public mutantsSurvived: number;
  public mutantsKilled: number;
  public failedMutations: number;
  private totalNumberOfReaults: number;
  constructor (private mResults: MutationResultsService) { }

  public ngOnInit () {
    this.totalNumberOfReaults = this.mResults.getAllMutationResults().length;
    this.mutantsSurvived = (this.mResults.getAllSurvivingMutants().length / this.totalNumberOfReaults) * 100;
    this.mutantsKilled = (this.mResults.getAllKilledMutants().length / this.totalNumberOfReaults ) * 100;
    this.failedMutations = (this.mResults.getAllFailedMutationAttempts().length / this.totalNumberOfReaults ) * 100;
  }

}
