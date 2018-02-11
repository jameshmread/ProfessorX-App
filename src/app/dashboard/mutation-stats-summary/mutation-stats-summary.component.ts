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
    this.killedMutants = this.resultsService.getAllKilledMutants().length;
    this.survivingMutants = this.resultsService.getAllSurvivingMutants().length;
    this.totalMutationScore = this.setMutationScore();
  }

  public setMutationScore (): number{
    const totalSuccessfulMutations = this.killedMutants + this.survivingMutants;
    return Number((this.killedMutants / totalSuccessfulMutations * 100).toFixed(2));
  }

  public getKilledMutants (mutatorResults: Array<boolean>): number {
    return mutatorResults.filter((a) => a).length;
  }
}
