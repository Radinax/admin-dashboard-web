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
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { camelCaseToNormalCase } from "@/utils/camelcase-to-normalcase";

const formSchema = z.object({
  username: z.string().trim().toLowerCase().email(),
  password: z.string().min(8).max(255),
});

export type FormValues = z.infer<typeof formSchema>;

export type FormType = "SIGNUP" | "SIGNIN";

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
      password: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(props.onSubmit)}>
        <fieldset>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">
                {camelCaseToNormalCase(type)}
              </CardTitle>
              <CardDescription>
                Enter your email and password below to `${type.toLowerCase()}`
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
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
                Sign up
              </Button>
            </CardFooter>
          </Card>
        </fieldset>
      </form>
    </Form>
  );
};

export default AuthForm;
