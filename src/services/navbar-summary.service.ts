import { Injectable, Output, EventEmitter, OnInit } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class NavbarSummaryService {


  @Output() public summaryEmitter: EventEmitter<string> = new EventEmitter<string>();
  public summary: string;

  public setSummary (summary: string) {
      this.summary = summary;
      this.summaryEmitter.next(this.summary);
    }
}
