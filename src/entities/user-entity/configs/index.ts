import type {EntityName} from "../model/entity-types";
import {ASSETS_PATH} from "@/shared/configs";

export const entityNameURIS: {[name in EntityName]: string} = {
    company: "/company",
    contact: "/contact",
    lead: "/lead"
}

export const entityActionURIS = {
    create: "/entity/create",
    remove: "/entity/remove"
}

export const iconPaths: {[name in EntityName]: string}  = {
    "company": ASSETS_PATH+"/company.png",
    "lead": ASSETS_PATH+"/lead.png",
    "contact": ASSETS_PATH+"/contact.png"
}

export const entitiesLabels: { [name in EntityName]: string } = {
    company: "Компнания",
    contact: "Контакт",
    lead: "Транзакция"
}
