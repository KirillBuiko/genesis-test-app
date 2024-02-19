import {axiosInstance, type ResponseScheme} from "@/shared/api";
import type {RequestType, ResponseType, EntityName} from "../model/entity-types";
import {AxiosError} from "axios";
import {entityActionURIS, entityNameURIS} from "../configs";

export async function createEntity<EN extends EntityName>(entityName: EN, request: RequestType[EN]):
    Promise<ResponseScheme<ResponseType[EN]>> {
    try {
        return {
            result: (await axiosInstance.post((entityActionURIS.create + entityNameURIS[entityName]), request)).data,
            error: null
        };
    }
    catch(e) {
        return {result: null, error: e as AxiosError};
    }
}