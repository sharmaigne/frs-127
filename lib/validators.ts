import { z } from "zod";

// Define the Zod schema for validation
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
    timestamp_start: z.string().min(1, { message: "Start time is required." }),
    timestamp_end: z.string().min(1, { message: "End time is required." }),
    files:
      typeof window !== "undefined" ? z.instanceof(FileList).optional() : z.any(),
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
        z.object({
          time_start: z.string().min(1),
          time_end: z.string().min(1),
          program: z.string().min(1),
        })
      )
      .optional(),
  });