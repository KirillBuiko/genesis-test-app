import {defineStore} from "pinia";
import {ref} from "vue";
import type {EntityName, IBaseResponse, RequestType} from "./entity-types";
import {EntityAPI} from "@/entities/user-entity";

export interface IStoreEntityType extends IBaseResponse {
    type: EntityName;
}

export const useEntitiesStore = defineStore("entities", () => {
    const entities = ref<IStoreEntityType[]>([
        {id: 123, type: "company"},
        {id: 456, type: "contact"},
        {id: 789, type: "lead"},
    ]);

    function addEntity(entity: IStoreEntityType) {
        entities.value.push(entity);
    }

    async function createEntity<EN extends EntityName>(entityName: EN, request: RequestType[EN]): Promise<void> {
        const { result } = await EntityAPI.createEntity(entityName, request);
        if (result) {
            const entity: IStoreEntityType = {
                type: entityName,
                ...result
            }
            addEntity(entity);
        }
    }

    return {entities, addEntity, createEntity};
});