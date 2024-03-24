import { atom } from "recoil";

export const radhaCounter = atom({
  key: "radhaCounter",
  default: 0,
});

export const krshnaCounter = atom({
  key: "krshnaCounter",
  default: 0,
});

export const jobSearchFilter = atom({
  key: "jobSearchFilter",
  default: {
    filterByJobTitle: "",
    filterByJobSkills: "",
    filterByVisa: "",
    filterByJobLocation: "",
    filterByJobDuration: "",
  },
});
