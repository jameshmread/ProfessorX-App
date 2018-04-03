import { Component, OnInit } from "@angular/core";
import { MutationResultsService } from "../../../services/mutation-results.service";
import { ResultFields } from "../../../../enums/ResultFields";
import { IMutationResult } from "../../../../interfaces/IMutationResult";
import { Filters } from "../../../preProcessors/Filters";
import { IndividualMutationService, IFilterType } from "../../../services/individual-mutation.service";
import { NavbarSummaryService } from "../../../services/navbar-summary.service";


@Component({
    selector: "app-code-change-display",
    templateUrl: "./code-change-display.component.html",
    styleUrls: ["./code-change-display.component.css"]
})

export class CodeChangeDisplayComponent implements OnInit {

    public codeDiff: Array<number> = [];
    public filteredMutants: Array<IMutationResult>;
    public currentFilter: IFilterType = {fileName: "All Files", mutationType: "All Mutator Types"};
    private survivingMutants: Array<IMutationResult>;

    constructor (
        private resultService: MutationResultsService,
        private individualService: IndividualMutationService,
        private navSummaryService: NavbarSummaryService
    ) { }

    public ngOnInit () {
        this.subscribeToServices();
        this.survivingMutants = this.resultService.getAllSurvivingMutants().filter((item, index) => index < 20);
        this.filteredMutants = this.survivingMutants;
        this.getDiff();
        this.setNavSummary();
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
        const filteredByFile = this.getMutantsFilteredByFile();

        const filteredFilesByTypes = this.getMutantsFilteredByType();

        this.filteredMutants = filteredFilesByTypes.filter((file) => filteredByFile.indexOf(file) > -1);
        // this.filteredMutants.filter((item, index) => index < 20);
        // Need to sort when filter returns no values
        this.setNavSummary();
    }

    private setNavSummary () {
        if (this.filteredMutants.length > 0) {
            const fileName = this.currentFilter.fileName.split("\\");
            this.navSummaryService.setSummary(
                "Current File: " + this.filteredMutants[0].srcFilePath + fileName[fileName.length - 1]);
        } else {
            this.navSummaryService.setSummary("No Results Found for Fhosen Filters");
        }
    }

    private getMutantsFilteredByFile (): Array<IMutationResult> {
        if (this.currentFilter.fileName.startsWith("All ")) {
            return this.resultService.getAllSurvivingMutants();
        }
        return this.resultService.getSurvivorsByFilter(ResultFields.srcFileName, this.currentFilter.fileName);
    }

    private getMutantsFilteredByType (): Array<IMutationResult> {
        if (this.currentFilter.mutationType.startsWith("All ")) {
            return this.resultService.getAllSurvivingMutants();
        }
        return this.resultService.getSurvivorsByFilter(ResultFields.mutationType, this.currentFilter.mutationType);
    }
}
