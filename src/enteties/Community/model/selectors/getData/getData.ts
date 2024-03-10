import { StateSchema } from "app/providers/storeProvider/config/stateShema";


export const getData = (state: StateSchema) => state?.group?.data;