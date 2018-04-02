import { Component, OnInit } from "@angular/core";
import { MutationResultsService } from "../../../services/mutation-results.service";
import { NavbarSummaryService } from "../../../services/navbar-summary.service";
import { MutationScoreDivisions } from "../../../../enums/MutationScoreDivisions";

@Component({
  selector: "app-mutation-stats-summary",
  templateUrl: "./mutation-stats-summary.component.html",
  styleUrls: ["./mutation-stats-summary.component.css"]
})
export class MutationStatsSummaryComponent implements OnInit {

  public killedMutants: number;
  public survivingMutants: number;
  public totalMutationScore: number;
  public roundedTotalMutationScore: number;
  public runDuration: Array<number>;

  constructor (private resultsService: MutationResultsService, private navService: NavbarSummaryService) {}

  public ngOnInit () {
    this.killedMutants = this.resultsService.getOverallSummary().totalKilledMutants;
    this.survivingMutants = this.resultsService.getOverallSummary().totalSurvivingMutants;
    this.totalMutationScore = this.resultsService.getOverallSummary().mutationScore;
    this.roundedTotalMutationScore = Math.round(this.totalMutationScore);

    this.runDuration = this.resultsService.getRunDuration();

    this.navService.setSummary("Project Mutation Score: " + this.totalMutationScore.toString() + "%");
  }
}
