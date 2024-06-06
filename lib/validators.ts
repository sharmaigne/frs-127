import { ZodObject, z } from "zod";
import { Facility } from "./types";

// TODO: add facility manager & master facility
export const createFacilitySchema = z.object({
  name: z.string().min(2, { message: "Facility name must be at least 2 characters." }),
  facility_type: z.enum(["hall", "classroom", "court", "field"]),
  description: z.string().min(5, { message: "Facility description must be at least 5 characters." }),
  location: z.string().min(5, { message: "Facility location must be at least 5 characters." }),
  capacity: z.number().min(1, { message: "Facility capacity must be at least 1." }),
  image_url: z.string().url().nullable(),
  facility_manager: z.string().min(1, { message: "Facility manager is required." }),
});

export const requestFormSchema = z.object({
    facility_id: z.string().min(1, { message: "Facility is required." }),
    event_name: z
      .string()
      .min(2, { message: "Event name must be at least 2 characters." }),
    event_description: z
      .string()
      .min(5, { message: "Event description must be at least 5 characters." }),
    organization: z
      .string(),
    timestamp_start: z.string().min(1, { message: "Start time is required." }).refine(
      (value) => { return new Date(value) > new Date(); },
      {message: "Start time must be in the future."}
    ),
    timestamp_end: z.string().min(1, { message: "End time is required." }).refine(
      (value) => { return new Date(value) > new Date(); },
      {message: "Start time must be in the future."}
    ),
    risks_table: z
      .array(
        z.object({
          risk: z.string().min(1),
          effect: z.string().min(1),
          likelihood: z.enum(["low", "medium", "high"]),
          impact: z.enum(["low", "medium", "high"]),
          mitigating_action: z.string().min(1),
          escalation_point: z.string().min(1),
        })
      )
      .optional(),
    program_schedule: z
      .array(
        // TODO: check why this is not working
        z.object({
          time_start: z.string().min(1).refine(
      (value) => { return new Date(value) > new Date(); },
      {message: "Start time must be in the future."}
    ),
          time_end: z.string().min(1).refine(
      (value) => { return new Date(value) > new Date(); },
      {message: "Start time must be in the future."}
    ),
          program: z.string().min(1),
        })
        .refine(
          (data) => {
            if (data.time_start >= data.time_end) {
              return false;
            }
            return true;
          },
          {
            message: "End time must be greater than start time.",
            path: ["time_end"],
          }
        )
      )
      .optional(),
  })
  .refine(
    (data) => {
      if (data.timestamp_start >= data.timestamp_end) {
        return false;
      }
      return true;
    },
    {
      message: "End time must be greater than start time.",
      path: ["timestamp_end"],
    }
  );