// // If the url is not changing dynamically this will cache the data for the time 3600 seconds
import { cache } from "react";
export const getItem = cache(async (id: string) => {
    const time = new Date();
    console.log('time',time);
    return time.toISOString();
});
