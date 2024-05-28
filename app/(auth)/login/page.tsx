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
import { LoginSchema } from "@/app/(auth)/_api/schemas";
import type { LoginFields } from "@/app/(auth)/_api/types";

import { login } from "./actions";
import GoogleAuth from "../components/GoogleAuth";
const LoginPage = () => {
  const form = useForm<LoginFields>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (data: LoginFields) => {
    console.log(data);
    login(JSON.stringify(data));
  }

  return (
    <div className="w-9/12 flex flex-col">
      <Header />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="flex flex-col gap-5 mt-10"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg text-darker font-bold">
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="name@up.edu.ph" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg text-darker font-bold">
                  Password
                </FormLabel>
                <FormControl>
                  <Input type="password" placeholder="*********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link
            href={{ pathname: "/password-reset" }}
            className="text-primary font-dm-sans self-end"
          >
            forgot password?
          </Link>

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="mt-4"
          >
            Log In
          </Button>
        </form>
      </Form>
      <GoogleAuth />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <div className="gap-3 text-center">
      <h2 className="font-bold text-primary">Log In to UP Reserve Hub</h2>
      <p className="text-lg">Welcome Back! Reserve UP Facilities with ease.</p>
    </div>
  );
};

const Footer = () => {
  return (
    <p className="mt-10">
      {"Don't"} have an account yet?{" "}
      <Link
        href={{ pathname: "/signup" }}
        className="text-primary underline font-dm-sans"
      >
        Create an Account
      </Link>
    </p>
  );
};

export default LoginPage;
