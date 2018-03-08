import { Component, OnInit } from "@angular/core";
import { MutationResultsService } from "../../services/mutation-results.service";
import { IMutationResult } from "../../../interfaces/IMutationResult";

@Component({
  selector: "app-mutation-failures",
  templateUrl: "./mutation-failures.component.html",
  styleUrls: ["./mutation-failures.component.scss"]
})
export class MutationFailures implements OnInit {

  public failures: Array<IMutationResult>;
  constructor (private resultsService: MutationResultsService) { }

 public ngOnInit () {
   this.failures = this.resultsService.getFailedMutationAttempts();
   console.log(this.failures);
  }
}
