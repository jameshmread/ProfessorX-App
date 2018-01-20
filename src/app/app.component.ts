import { Component } from "@angular/core";
import * as duration from "./data.json";
import * as data from "./outputStoreData.json";

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
    this.getDuration(duration);
    this.setMutationInformation(data);
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

  private setMutationInformation (outputStore: Object) {
    this.runner = (outputStore["RUNNER"]);
    this.runnerConfig = outputStore["RUNNER_CONFIG"];

    for (let i = 0; i < Object.keys(outputStore["RESULTS_ARRAY"]).length; i++) {
      if (this.sourceFiles.indexOf(outputStore["RESULTS_ARRAY"][i]["SRC_FILE"]) < 0){
        this.sourceFiles.push(outputStore["RESULTS_ARRAY"][i]["SRC_FILE"]);
      }
      if (!outputStore["RESULTS_ARRAY"][i]["mutantKilled"]){
        this.survivingMutants.push(outputStore["RESULTS_ARRAY"][i]);
      }
      this.mutatorResults.push(outputStore["RESULTS_ARRAY"][i]["mutantKilled"]);
    }
    console.log(this.survivingMutants);
  }
}
