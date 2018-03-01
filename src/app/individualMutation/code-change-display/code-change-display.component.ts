import { Component, OnInit } from "@angular/core";
import { MutationResultsService } from "../../../services/mutation-results.service";
import { ResultFields } from "../../../../enums/ResultFields";
import { IMutationResult } from "../../../../interfaces/IMutationResult";


@Component({
    selector: "app-code-change-display",
    templateUrl: "./code-change-display.component.html",
    styleUrls: ["./code-change-display.component.css"]
})

export class CodeChangeDisplayComponent implements OnInit {

    public survivingMutants: Array<IMutationResult>;
    public codeDiff: Array<number> = [];

    constructor (private resultService: MutationResultsService) { }

    public ngOnInit () {
        this.survivingMutants = this.resultService.getAllSurvivingMutants();
        this.getDiff();
    }

    private getDiff () {
        this.survivingMutants.forEach((mutant) => {
            mutant.origionalCode.forEach((line, index) => {
                if (mutant.mutatedCode.indexOf(line) < 0) {
                    this.codeDiff.push((mutant.origionalCode[index].lineNumber));
                    return;
                }
            });
        });
    }
}
