import { object, string, array } from "yup";

export const projectSchema = object({
  projectName: string().required("project name is required"),
  pricing: string().required("pricing is required"),
  assigness: array().required("Select at least one user"),
  totalHours: string().required("please define working hours"),
});
