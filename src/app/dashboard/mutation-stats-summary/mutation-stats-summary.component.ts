import { Component, OnInit, Input } from "@angular/core";
import { MutationResultsService } from "../../../services/mutation-results.service";

@Component({
  selector: "app-mutation-stats-summary",
  templateUrl: "./mutation-stats-summary.component.html",
  styleUrls: ["./mutation-stats-summary.component.css"]
})
export class MutationStatsSummaryComponent implements OnInit {

  public killedMutants: number;
  public survivingMutants: number;
  public totalMutationScore: number;

  constructor (private resultsService: MutationResultsService) {}

  public ngOnInit () {
    this.killedMutants = this.resultsService.getOverallSummary().totalKilledMutants;
    this.survivingMutants = this.resultsService.getOverallSummary().totalSurvivingMutants;
    this.totalMutationScore = this.resultsService.getOverallSummary().mutationScore;
  }
}
