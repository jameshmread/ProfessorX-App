import { Component, Output, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { Routes } from "@angular/router";

import { NavbarSummaryService } from "../../services/navbar-summary.service";
import { NavbarTabs } from "../../../enums/NavbarTabs";
import { NavLinks } from "../../../enums/NavLinks";
import { Subscription } from "rxjs/Subscription";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { IndividualMutationComponent } from "../individualMutation/individual-mutation.component";
import { MutationFailures } from "../mutationFailures/mutation-failures.component";

export const routerConfig: Routes = [
  {
      path: NavLinks.dashboard,
      component: DashboardComponent
  },
  {
      path: NavLinks.survivors,
      component: IndividualMutationComponent
  },
  {
      path: NavLinks.failures,
      component: MutationFailures
  },
  {
      path: "",
      redirectTo: NavLinks.dashboard,
      pathMatch: "full"
  },
  {
      path: "**",
      redirectTo: NavLinks.dashboard,
      pathMatch: "full"
  }
];

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})

export class NavbarComponent implements OnInit, OnDestroy{

  public tabs: Array<string> = [NavbarTabs.dashboard, NavbarTabs.survivingMutants, NavbarTabs.failures];
  public navLinks: Array<string> = [NavLinks.dashboard, NavLinks.survivors, NavLinks.failures];
  public currentTabText = this.tabs[0];

  public currentSummary: string;

  private subscription: Subscription;
  constructor (private navbarService: NavbarSummaryService) {
  }

  public ngOnInit () {
    this.subscribeToPageSummaryInfo();
  }

  public ngOnDestroy () {
    this.subscription.unsubscribe();
  }

  private subscribeToPageSummaryInfo () {
    this.subscription = this.navbarService.summaryEmitter.subscribe((summary, err) => {
      this.currentSummary = summary;
    });
  }

}
