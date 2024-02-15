import type {EntityName} from "../model/entity-types";
import {ASSETS_PATH} from "@/shared/configs";

export const entityRequestURIS: {[name in EntityName]: string} = {
    company: "/company",
    contact: "/contact",
    transaction: "/transaction"
}

export const entityActionURIS = {
    create: "/create",
    remove: "/remove"
}

export const iconPaths: {[name in EntityName]: string}  = {
    "company": ASSETS_PATH+"/company.png",
    "transaction": ASSETS_PATH+"/transaction.png",
    "contact": ASSETS_PATH+"/contact.png"
}

export const entitiesLabels: { [name in EntityName]: string } = {
    company: "Компнания",
    contact: "Контакт",
    transaction: "Транзакция"
}
