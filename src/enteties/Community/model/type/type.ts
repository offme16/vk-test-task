export interface GetGroupsResponseSchema {
    result: 1 | 0,
    data?: Group[],
    isLoading: boolean,
    error?: string,
  }
  
  interface Group {
    "id": number,
    "name": string,
    "closed": boolean,
    "avatar_color"?: string,
    "members_count": number,
    "friends"?: User[]
  }
  
  interface User {
    "first_name": string,
    "last_name": string
  }