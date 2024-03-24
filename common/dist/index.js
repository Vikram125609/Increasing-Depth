"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterInput = void 0;
const zod_1 = require("zod");
exports.filterInput = zod_1.z.object({
    id: zod_1.z.string(),
    filterByJobTitle: zod_1.z.string(),
    filterByJobSkills: zod_1.z.string(),
    filterByVisa: zod_1.z.string(),
    filterByJobLocation: zod_1.z.string(),
    filterByJobDuration: zod_1.z.string(),
});
