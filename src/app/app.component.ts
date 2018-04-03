import { Component } from "@angular/core";
import { GatherData } from "../inputOrganiser/GatherData";
import { MutationResultsService } from "../services/mutation-results.service";
import { NavbarTabs } from "../../enums/NavbarTabs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent{

  constructor (private mResultsService: MutationResultsService) {
    const dataGatherer = new GatherData();
    this.mResultsService.setAllMutationResults(dataGatherer.getResultsArray());
    this.mResultsService.setSummaryInfo(dataGatherer.getSummaryFileList(), dataGatherer.getOverallScores());
    this.mResultsService.setRunDuration(dataGatherer.getDuration());
  }
}
