import { z } from "zod";
import * as Schemas from "@/app/(auth)/_api/schemas"

export type PasswordResetFields = z.infer<typeof Schemas.PasswordResetSchema>;
export type ConfirmResetFields = z.infer<typeof Schemas.ConfirmPasswordSchema>;
export type LoginFields = z.infer<typeof Schemas.LoginSchema>;
export type SignupFields = z.infer<typeof Schemas.SignupSchema>