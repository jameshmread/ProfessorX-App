import { ResultFields } from "../../enums/ResultFields";
import { IMutationResult } from "../../interfaces/IMutationResult";

export class Filters {

    public static removeArrayDuplicates (inputArray: Array<any>): Array<any> {
        return inputArray.filter((item, index, array) => array.indexOf(item) === index);
    }

    public static getIndividualProperty (array: Array<any>, propertyName: string) {
        return array.map((item) => item[propertyName]);
    }

    public static filterResultBy (array: Array<IMutationResult>, attributeToFilterBy: ResultFields, filterValue: any) {
        return array.filter((item) => item[attributeToFilterBy] === filterValue);
    }
}
