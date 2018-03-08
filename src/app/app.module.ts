import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { MDBBootstrapModule } from "angular-bootstrap-md";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProgressBarComponent } from "./dashboard/progress-bar/progress-bar.component";
import { MutationStatsSummaryComponent } from "./dashboard/mutation-stats-summary/mutation-stats-summary.component";
import { MutatedFilesSummaryComponent } from "./dashboard/mutated-files-summary/mutated-files-summary.component";
import { MutationFiltersComponent } from "./individualMutation/mutation-filters/mutation-filters.component";
import { CodeChangeDisplayComponent } from "./individualMutation/code-change-display/code-change-display.component";
import { MutationResultsService } from "../services/mutation-results.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { IndividualMutationComponent } from "./individualMutation/individual-mutation.component";
import { IndividualMutationService } from "../services/individual-mutation.service";
import { MutationFailures } from "./mutationFailures/mutation-failures.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProgressBarComponent,
    MutationStatsSummaryComponent,
    MutatedFilesSummaryComponent,
    MutationFiltersComponent,
    CodeChangeDisplayComponent,
    DashboardComponent,
    IndividualMutationComponent,
    MutationFailures
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [MutationResultsService, IndividualMutationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
