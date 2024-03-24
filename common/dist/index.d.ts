import { z } from "zod";
export declare const filterInput: z.ZodObject<{
    id: z.ZodString;
    filterByJobTitle: z.ZodString;
    filterByJobSkills: z.ZodString;
    filterByVisa: z.ZodString;
    filterByJobLocation: z.ZodString;
    filterByJobDuration: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    filterByJobTitle: string;
    filterByJobSkills: string;
    filterByVisa: string;
    filterByJobLocation: string;
    filterByJobDuration: string;
}, {
    id: string;
    filterByJobTitle: string;
    filterByJobSkills: string;
    filterByVisa: string;
    filterByJobLocation: string;
    filterByJobDuration: string;
}>;
export type filterParams = z.infer<typeof filterInput>;
