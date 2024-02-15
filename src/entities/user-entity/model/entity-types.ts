export type EntityName = "company" | "contact" | "transaction";

export interface IBaseResponse {
    id: number
}

export interface ICompanyRequest {}

export interface ICompanyResponse extends IBaseResponse {}

export interface IContactRequest {}

export interface IContactResponse extends IBaseResponse {}

export interface ITransactionRequest {}

export interface ITransactionResponse extends IBaseResponse {}

export interface RequestType {
    company: ICompanyRequest,
    contact: IContactRequest,
    transaction: ITransactionRequest
}
type _check = RequestType[EntityName];

export interface ResponseType {
    company: ICompanyResponse,
    contact: IContactResponse,
    transaction: ITransactionResponse
}
type __check = ResponseType[EntityName];
