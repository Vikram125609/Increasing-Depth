import { z } from "zod";
export const filterInput = z.object({
  id: z.string(),
  filterByJobTitle: z.string(),
  filterByJobSkills: z.string(),
  filterByVisa: z.string(),
  filterByJobLocation: z.string(),
  filterByJobDuration: z.string(),
});
export type filterParams = z.infer<typeof filterInput>;