import { Component } from "@angular/core";
import { GatherData } from "../inputOrganiser/GatherData";
import { MutationResultsService } from "../services/mutation-results.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent{

  public duration = [];
  public currentTab = "Dashboard";

  constructor (private mResultsService: MutationResultsService) {
    const dataGatherer = new GatherData();
    this.mResultsService.setAllMutationResults(dataGatherer.getResultsArray());
    this.duration = dataGatherer.getDuration();
  }

  public getCurrentTab (event){
    this.currentTab = event;
  }
}
