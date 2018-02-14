import { ResultFields } from "../enums/ResultFields";
import { ResultCategories } from "../enums/ResultCategories";

export interface IResultRequest {
    unique: boolean;
    resultCategory: ResultCategories;
    filterResultBy: ResultFields;
    filterValue: any;
}
