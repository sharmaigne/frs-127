import {z} from "zod";

export const SignupSchema = z
  .object({
    first_name: z.string(),
    middle_initial: z.string().length(1, { message: "Middle initial must be one character" }),
    last_name: z.string(),
    email: z.string().email().regex(/^[a-zA-Z0-9._%+-]+@up\.edu\.ph$/, {
      message: "Email must be a valid institutional email",
    }),
    password1: z
      .string()
      .min(8, { message: "Password must be longer than 8 characters" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.,\-_@$!%*?&])[A-Za-z\d.,\-_@$!%*?&]+$/,
        {
          message:
            "Password must contain at least one uppercase letter, one " +
            "lowercase letter, one number, and one special character",
        },
      ),
    password2: z.string(),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Passwords don't match",
    path: ["password2"],
  });

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export const PasswordResetSchema = z.object({
  email: z.string().email(),
});

export const ConfirmPasswordSchema = z
  .object({
    new_password1: z
      .string()
      .min(8, { message: "Password must be longer than 8 characters" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*?&])[A-Za-z\d.@$!%*?&]+$/,
        {
          message:
            "Password must contain at least one uppercase letter, one " +
            "lowercase letter, one number, and one special character (.@$!%*?&)",
        },
      ),
    new_password2: z.string(),
  })
  .refine((data) => data.new_password1 === data.new_password2, {
    message: "Passwords don't match",
    path: ["new_password2"],
  });
