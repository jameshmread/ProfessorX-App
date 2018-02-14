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
    this.mResultsService.setAllMutationResults(new GatherData().getResultsArray());
  }

  public getCurrentTab (event){
    this.currentTab = event;
  }
}
