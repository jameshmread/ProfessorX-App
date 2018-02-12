import { Component, OnInit } from "@angular/core";
import { MutationResultsService } from "../../../services/mutation-results.service";
import { ResultFields } from "../../../../enums/ResultFields";


@Component({
  selector: "app-code-change-display",
  templateUrl: "./code-change-display.component.html",
  styleUrls: ["./code-change-display.component.css"]
})

export class CodeChangeDisplayComponent implements OnInit {

  public survivingMutants;

  constructor (private resultService: MutationResultsService) {}

  public ngOnInit () {
    this.survivingMutants = this.resultService.getAllSurvivingMutants();

  }

  public sortCodeByLineNumber () {
    this.survivingMutants.sort((a, b) => a[ResultFields.lineNumber] - b[ResultFields.lineNumber]);
  }
}
