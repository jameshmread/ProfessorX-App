import { Component, Output, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { NavbarSummaryService } from "../../services/navbar-summary.service";
import { NavbarTabs } from "../../../enums/NavbarTabs";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit, OnDestroy{

  @Output() public currentTab = new EventEmitter<string>();

  public tabs: Array<string> = [NavbarTabs.dashboard, NavbarTabs.survivingMutants, NavbarTabs.failures];
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

  public selectTab (navItem: string) {
    this.currentTab.emit(navItem);
    this.currentTabText = navItem;
  }

  private subscribeToPageSummaryInfo () {
    this.subscription = this.navbarService.summaryEmitter.subscribe((summary, err) => {
      this.currentSummary = summary;
    });
  }

}
