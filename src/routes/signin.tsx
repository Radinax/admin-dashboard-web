import { z } from "zod";
import { createSession } from "@/api/auth";
import { useNavigate } from "react-router-dom";
import AuthForm from "@/components/auth/auth-form";
import { toast } from "sonner";

const formSchema = z.object({
  username: z.string().trim().toLowerCase().email(),
  password: z.string().min(8).max(255),
});

type FormValues = z.infer<typeof formSchema>;

export default function SigninRoute() {
  const navigate = useNavigate();

  function onSubmit(values: FormValues) {
    const op = createSession(values.username, values.password);
    toast.promise(op, {
      success: () => {
        navigate("/");
        return "You successfully logged in";
      },
      error: "Something went wrong while authenticating",
      loading: "Authenticating...",
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <AuthForm type="SIGNIN" onSubmit={onSubmit} />
    </div>
  );
}
