import { Component, OnInit, OnChanges } from "@angular/core";
import { MutationResultsService } from "../../../services/mutation-results.service";
import { ResultFields } from "../../../../enums/ResultFields";
import { IMutationResult } from "../../../../interfaces/IMutationResult";
import { Filters } from "../../../preProcessors/Filters";
import { IndividualMutationService, IFilterType } from "../../../services/individual-mutation.service";


@Component({
    selector: "app-code-change-display",
    templateUrl: "./code-change-display.component.html",
    styleUrls: ["./code-change-display.component.css"]
})

export class CodeChangeDisplayComponent implements OnInit {

    public codeDiff: Array<number> = [];
    public filteredMutants: Array<IMutationResult>;
    public currentFilter: IFilterType;
    private survivingMutants: Array<IMutationResult>;

    constructor (
        private resultService: MutationResultsService,
        private individualService: IndividualMutationService) { }

    public ngOnInit () {
        this.subscribeToServices();
        this.survivingMutants = this.resultService.getAllSurvivingMutants();
        this.filteredMutants = this.survivingMutants;
        this.currentFilter = {fileName: this.filteredMutants[0].srcFileName, mutationType: ResultFields.lineNumber};
        this.getDiff();
    }

    private getDiff () {
        this.survivingMutants.forEach((mutant) => {
            mutant.origionalCode.forEach((line, index) => {
                if (mutant.mutatedCode.indexOf(line) < 0) {
                    this.codeDiff.push((mutant.origionalCode[index].lineNumber));
                }
            });
        });
    }

    private subscribeToServices () {
        this.individualService.filterChanged.subscribe((newFilter) => {
            this.currentFilter = newFilter;
            this.filterMutants();
          });
    }

    private filterMutants () {
        this.filteredMutants =
        this.resultService.getSurvivorsByFilter(ResultFields.srcFileName, this.currentFilter.fileName);
    }
}
