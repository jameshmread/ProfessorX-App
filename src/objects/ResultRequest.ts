import { IResultRequest } from "../../interfaces/IResultRequest";
import { ResultCategories } from "../../enums/ResultCategories";
import { ResultFields } from "../../enums/ResultFields";

export class ResultRequest implements IResultRequest{
    public unique: boolean;
    public resultCategory: ResultCategories;
    public filterResultBy: ResultFields;
    public filterValue: any;
    constructor (
        unique: boolean,
        resultCategory: ResultCategories,
        filterResultBy: ResultFields,
        filterValue: any
    ) {
        this.unique = unique;
        this.resultCategory = resultCategory;
        this.filterResultBy = filterResultBy;
        this.filterValue = filterValue;
    }
}
