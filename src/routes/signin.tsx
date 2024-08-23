import { z } from "zod";
import { createSession } from "@/api/auth";
import { useNavigate } from "react-router-dom";
import LoginForm from "@/features/auth/components/auth-form/auth-form";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email("Invalid email address"), // Validates email format

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character"),
});

type FormValues = z.infer<typeof formSchema>;

export default function SigninRoute() {
  const navigate = useNavigate();

  function onSubmit(values: FormValues) {
    const op = createSession(values.email, values.password);
    console.log({ values });
    toast.promise(op, {
      success: () => {
        navigate("/");
        return "You successfully logged in";
      },
      error: (error: unknown) => {
        console.log({ error });
        return "Something went wrong while authenticating";
      },
      loading: "Authenticating...",
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <LoginForm type="LOGIN" onSubmit={onSubmit} />
    </div>
  );
}
