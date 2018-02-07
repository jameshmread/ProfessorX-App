import { Component } from "@angular/core";
import * as duration from "./data.json";
import * as data from "./outputStoreData.json";
import { GatherData } from "../inputOrganiser/GatherData";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent{

  // way too many variables here, need to refactor into an object
  public importedData;
  public outputStore: Object;

  public runner: string;
  public runnerConfig: Object;
  public testFilePaths: Array<string> = [];

  // fields passed to other components
  public duration = [];
  public sourceFiles: Array<string> = [];
  public mutatorResults: Array<boolean> = [];
  public survivingMutants: Array<Object> = [];

  public currentTab = "Dashboard";

  constructor () {
    const resultsArray = new GatherData().getResultsArray();
    this.getDuration(duration);
    this.sourceFiles = [...resultsArray].map((result) => result.srcFileName);
    this.mutatorResults = [...resultsArray].map((result) => result.mutantKilled);
    this.survivingMutants = [...resultsArray].map((result) => {
      if (result.mutantKilled) {
        return result;
      }
    });
    console.log(this);
  }

  public getDuration (timeTaken) {
    this.duration.push(timeTaken["d"]);
    this.duration.push(timeTaken["h"]);
    this.duration.push(timeTaken["m"]);
    this.duration.push(timeTaken["s"]);
    this.duration.push(timeTaken["ms"]);
  }

  public getCurrentTab (event){
    this.currentTab = event;
  }
}
