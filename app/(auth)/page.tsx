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
import { SignupSchema } from "@/app/(auth)/_api/schemas";
import type { SignupFields } from "@/app/(auth)/_api/types";

import GoogleAuth from "@/app/(auth)/components/GoogleAuth";
import { signup } from "./login/actions";

const SignupPage = () => {
  const form = useForm<SignupFields>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      first_name: "",
      middle_initial: "",
      last_name: "",
      email: "",
      password1: "",
      password2: "",
    },
  });

  const handleSignup = (data: SignupFields) => {
    signup(JSON.stringify(data));
  }

  if (form.formState.isSubmitSuccessful) return <SuccessFeedback />;

  return (
    <div className="w-9/12">
      <div className="text-center pb-10">
        <h2 className="font-bold text-primary text-center">
          Sign Up to UP Reserve Hub
        </h2>
        <p>Reserve UP Facilities Starting Today!</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSignup)}
          className="flex flex-col gap-10"
        >
          <div className="grid grid-cols-7 gap-2">
            <FormField
              name="first_name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Juan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="middle_initial"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-1">
                  <FormLabel>M.I.</FormLabel>
                  <FormControl>
                    <Input placeholder="D" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="last_name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Dela Cruz" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="name@up.edu.ph" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password1"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="*********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password2"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="*********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting}>
            Sign Up
          </Button>
        </form>
      </Form>

      <GoogleAuth />

      <p className="mt-10">
        Already have an account?{" "}
        <Link href={{ pathname: "/login" }} className="text-primary underline">
          Log In Here
        </Link>
      </p>
    </div>
  );
};

/**
 * The screen to be displayed after a successful signup.
 *
 * @remarks this is factored out as this is just a conditionally rendered
 *          static page
 */
const SuccessFeedback = () => {
  return (
    <div className="w-10/12">
      <div className="flex flex-col items-center">
        <h1 className="font-bold justify-center pb-3 text-center text-primary">
          Sign-up Successful!
        </h1>
        <p className="pb-8 text-center font-body">
          To complete your registration, please check your email inbox for a
          verification link. Once verified, {"you'll"} be all set to explore our
          platform!
        </p>
        <Button className="w-full" asChild>
          <Link href="/login">Continue to Log In Page</Link>
        </Button>
      </div>
    </div>
  );
};

export default SignupPage;
