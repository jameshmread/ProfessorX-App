import { Component, OnInit } from "@angular/core";
import { RequestManagerFactory } from "../../../requestManagers/RequestManagerFactory";
import { RequestManager } from "../../../requestManagers/RequestManager";
import { ResultCategories } from "../../../../enums/ResultCategories";
import { ResultRequest } from "../../../objects/ResultRequest";
import { MutationResultsService } from "../../../services/mutation-results.service";
import { ResultFields } from "../../../../enums/ResultFields";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.css"]
})
export class ProgressBarComponent implements OnInit {

  public mutantsSurvived: number;
  public mutantsKilled: number;
  public failedMutations: number;
  private totalNumberOfResults: number;

  constructor (private mResults: MutationResultsService) {}

  public ngOnInit () {
    const requestManagerFact = new RequestManagerFactory();
    this.totalNumberOfResults =
    requestManagerFact.getRequestManager(new ResultRequest(false, ResultCategories.all, null, null)).length;
    const x = requestManagerFact.getRequestManager(new ResultRequest(false, ResultCategories.all, null, null));
    console.log("tot results", x);
    // this.totalNumberOfResults = this.mResults.getAllMutationResults().length;
    this.mutantsSurvived = (this.mResults.getAllSurvivingMutants().length / this.totalNumberOfResults) * 100;
    this.mutantsKilled = (this.mResults.getAllKilledMutants().length / this.totalNumberOfResults ) * 100;
    this.failedMutations = (this.mResults.getAllFailedMutationAttempts().length / this.totalNumberOfResults ) * 100;
  }

}
