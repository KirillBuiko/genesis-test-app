export type EntityName = "company" | "contact" | "lead";

export interface IBaseResponse {
    id: number
}

export interface ICompanyRequest {}

export interface ICompanyResponse extends IBaseResponse {}

export interface IContactRequest {}

export interface IContactResponse extends IBaseResponse {}

export interface ILeadRequest {}

export interface ILeadResponse extends IBaseResponse {}

export interface RequestType {
    company: ICompanyRequest,
    contact: IContactRequest,
    lead: ILeadRequest
}
type _check = RequestType[EntityName];

export interface ResponseType {
    company: ICompanyResponse,
    contact: IContactResponse,
    lead: ILeadResponse
}
type __check = ResponseType[EntityName];
