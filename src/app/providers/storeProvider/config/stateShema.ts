import { GetGroupsResponseSchema } from "enteties/Community";

export interface StateSchema {
    group: GetGroupsResponseSchema;
}

export type StateSchemaKey = keyof StateSchema;