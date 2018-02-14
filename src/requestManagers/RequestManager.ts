import { IResultRequest } from "../../interfaces/IResultRequest";
import { IMutationResult } from "../../interfaces/IMutationResult";
import { Filters } from "../preProcessors/Filters";
import { MutationResultsService } from "../services/mutation-results.service";

export abstract class RequestManager {
    protected requestResult: Array<IMutationResult>;

    public processRequest (request: IResultRequest): Array<IMutationResult> {
        this.getResult();
        Filters.filterResultBy(this.requestResult , request.filterResultBy, request.filterValue);
        if (request.unique) {
            Filters.removeArrayDuplicates(this.requestResult);
        }
        return this.requestResult;
    }

    protected abstract getResult (): Array<IMutationResult>;
}
