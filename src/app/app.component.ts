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
  public sourceFiles: Array<string> = [];
  public mutatorResults: Array<boolean> = [];
  public survivingMutants: Array<Object> = [];

  public currentTab = "Dashboard";

  constructor (private mResultsService: MutationResultsService) {
    const dataGatherer = new GatherData();
    const resultsArray = new GatherData().getResultsArray();
    this.mResultsService.setAllMutationResults(new GatherData().getResultsArray());
    // this.duration = dataGatherer.getDuration();
    // this.sourceFiles = resultsArray.map((result) => result.srcFileName);
    // this.mutatorResults = resultsArray.map((result) => result.mutantKilled);
    // this.survivingMutants = resultsArray.map((result) => {
    //   if (result.mutantKilled) {
    //     return result;
    //   }
    // });
    console.log(this);
  }

  public getCurrentTab (event){
    this.currentTab = event;
  }
}
