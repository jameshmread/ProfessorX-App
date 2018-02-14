import { ResultFields } from "../enums/ResultFields";

export interface IResultRequest {
    unique: boolean;
    resultCategory: string;
    filterResultBy: ResultFields;
    filterValue: any;
}
