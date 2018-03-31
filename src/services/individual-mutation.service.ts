import { Injectable, EventEmitter, OnChanges, Output } from "@angular/core";

export interface IFilterType{
  fileName: string;
  mutationType: string;
}

@Injectable()
export class IndividualMutationService implements OnChanges{

  public currentFilter: IFilterType;
  @Output() public filterChanged = new EventEmitter<IFilterType>();
  constructor () { }

  public ngOnChanges () {
      this.emitCurrentFilter();
    }

    public setCurrentFilter (newFilter: IFilterType) {
        this.currentFilter = newFilter;
        this.emitCurrentFilter();
    }

  public setCurrentFileName (newFileName: string) {
      this.currentFilter.fileName = newFileName;
      this.emitCurrentFilter();
    }

    public setCurrentMutationType (newType: string) {
      if (newType.length > 0) {
        this.currentFilter.mutationType = newType;
        this.emitCurrentFilter();
      }
  }

  public getCurrentFilter (): IFilterType {
    return this.currentFilter;
  }

  private emitCurrentFilter () {
    this.filterChanged.emit(this.currentFilter);
  }
}
