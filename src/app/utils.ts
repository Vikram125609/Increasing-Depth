import { cache } from "react";
export const getItem = cache(async (id: string) => {
    const time = new Date();
    return time.toISOString();
});
