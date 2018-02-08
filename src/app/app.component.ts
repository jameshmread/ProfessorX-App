import { Component } from "@angular/core";
import * as duration from "./data.json";
import { GatherData } from "../inputOrganiser/GatherData";
import { Output } from "@angular/core/src/metadata/directives";

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

  constructor () {
    const resultsArray = new GatherData().getResultsArray();
    this.getDuration(duration);
    this.sourceFiles = resultsArray.map((result) => result.srcFileName);
    this.mutatorResults = resultsArray.map((result) => result.mutantKilled);
    this.survivingMutants = resultsArray.map((result) => {
      if (result.mutantKilled) {
        return result;
      }
    });
    console.log(this);
  }

  public getDuration (timeTaken) {
    Object.keys(timeTaken).forEach((timeDivision) => {
      this.duration.push(timeTaken[timeDivision]);
    });
  }

  public getCurrentTab (event){
    this.currentTab = event;
  }
}
