/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { camelCaseToNormalCase } from "@/utils/camelcase-to-normalcase";
import { formSchema } from "@/schemas";
import { Button, Input, Link } from "@/components/ui";
import { capitalizeFirstLetter } from "@/utils/capitalize";

export type FormValues = z.infer<typeof formSchema>;

export type FormType = "REGISTER" | "LOGIN";

export type Props = Readonly<{
  type: FormType;
  onSubmit: (value: FormValues) => void;
}>;

const AuthForm = (props: Props) => {
  const type = props.type;
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const action = type.toLowerCase();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(props.onSubmit)}>
        <fieldset className="flex flex-col justify-center items-center">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">
                {camelCaseToNormalCase(type)}
              </CardTitle>
              <CardDescription>
                Enter your email and password below to {action}
              </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-4">
              {type === "REGISTER" && (
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="enter your username"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Your username will be your email if you dont input
                        anything.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      We wont share your email with anybody.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Try to make it as secure as possible.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                {capitalizeFirstLetter(action)}
              </Button>
            </CardFooter>
          </Card>
          {type === "LOGIN" ? (
            <Link className="underline text-xs" to="/register">
              Click to register account
            </Link>
          ) : (
            <Link className="underline text-xs" to="/login">
              If you have an account then click to login
            </Link>
          )}
        </fieldset>
      </form>
    </Form>
  );
};

export default AuthForm;
