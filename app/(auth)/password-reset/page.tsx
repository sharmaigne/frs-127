"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Link from "next/link";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordResetSchema } from "@/app/(auth)/_api/schemas";
import type { PasswordResetFields } from "@/app/(auth)/_api/types";

const PasswordResetPage = () => {
  const form = useForm<PasswordResetFields>({
    resolver: zodResolver(PasswordResetSchema),
    defaultValues: {
      email: "",
    },
  })

  if (form.formState.isSubmitSuccessful) {
    return (
      <div className="flex-col justify-center mb-10">
        <h1 className="text-primary font-bold">Email has been sent.</h1>
        <p>Please check your email for the password reset link.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex-col justify-center mb-10 text-center">
        <h1 className="text-primary font-bold">Forgot Your Password?</h1>
        <p>Enter your new password to secure your account.</p>
      </div>

      <Form {...form}>
        <form
          // onSubmit={form.handleSubmit(PostPasswordResetEmail)}
          className="flex flex-col h-56 gap-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg text-darker font-bold">
                  Institutional Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="name@up.edu.ph" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="mt-10"
          >
            Reset Password
          </Button>
        </form>
      </Form>

      <div className="flex justify-center">
        <p>
          Already have an account?{" "}
          <Link href="/login" className="underline text-primary">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PasswordResetPage;
