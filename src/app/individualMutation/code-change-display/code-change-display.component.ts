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
    public codeDiff: Array<Object> = [];

    constructor (private resultService: MutationResultsService) { }

    public ngOnInit () {
        this.survivingMutants = this.resultService.getAllSurvivingMutants();
        this.survivingMutants.forEach((survivor) => {
            survivor.mutatedCode.forEach((line, index) => {
                if (survivor.origionalCode.indexOf(line) < 0) {
                    this.codeDiff.push({
                        diff: survivor.mutatedCode[index],
                        line: index + 1
                    });
                    survivor.origionalCode.splice(index + 1, 0, survivor.mutatedCode[index]);
                }
            });
        });
    }

    public sortCodeByLineNumber () {
        this.survivingMutants.sort((a, b) => a[ResultFields.lineNumber] - b[ResultFields.lineNumber]);
    }
}
