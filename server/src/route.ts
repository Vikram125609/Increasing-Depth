import { NextFunction, Request, Response, Router } from "express";
import axios, { AxiosResponse } from "axios";
import { adminJobs } from "./index.d";
import { filterInput } from "../../common/src/index";
const router = Router();
router.post(
  "/jobseeker/list-all-jobs",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const parsedInput = filterInput.safeParse(req.body);
      // if (!parsedInput.success) {
      //   return res
      //     .status(400)
      //     .json({ message: "Invalid Input", success: false });
      // }
      const {
        id,
        filterByJobTitle,
        filterByJobSkills,
        filterByVisa,
        filterByJobLocation,
        filterByJobDuration,
      } = req.body;
      const data: AxiosResponse<{
        code: number;
        message: string;
        data: { adminJobs: adminJobs[] };
      }> = await axios.post(
        `https://c2cjobs.org/api/v1/jobseeker/list-all-jobs`,
        {
          id: id,
          filterByJobTitle: filterByJobTitle,
          filterByJobSkills: filterByJobSkills,
          filterByVisa: filterByVisa,
          filterByJobLocation: filterByJobLocation,
          filterByJobDuration: filterByJobDuration,
        }
      );
      return res.status(200).json({
        success: true,
        message: "All Jobs List",
        data: { adminJobs: data.data.data?.adminJobs },
      });
    } catch (error) {
      res.status(500).json({
        message: "Unexpected error at server. Please try again!!",
        success: false,
      });
      return next(new Error(error));
    }
  }
);
module.exports = router;
