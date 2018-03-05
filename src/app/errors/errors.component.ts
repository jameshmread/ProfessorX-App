import { Component, OnInit } from "@angular/core";
import { MutationResultsService } from "../../services/mutation-results.service";
import { IMutationResult } from "../../../interfaces/IMutationResult";

@Component({
  selector: "app-errors",
  templateUrl: "./errors.component.html",
  styleUrls: ["./errors.component.scss"]
})
export class ErrorsComponent implements OnInit {

  public failures: Array<IMutationResult>;
  constructor (private resultsService: MutationResultsService) { }

 public ngOnInit () {
   this.failures = this.resultsService.getFailedMutationAttempts();
   console.log(this.failures);
  }
}
