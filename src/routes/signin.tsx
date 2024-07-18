import { z } from "zod";
import { createSession } from "@/api/auth";
import { useNavigate } from "react-router-dom";
import AuthForm from "@/components/auth/auth-form";

const formSchema = z.object({
  username: z.string().trim().toLowerCase().email(),
  password: z.string().min(8).max(255),
});

type FormValues = z.infer<typeof formSchema>;

export default function SigninRoute() {
  const navigate = useNavigate();

  async function onSubmit(values: FormValues) {
    await createSession(values.username, values.password);
    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <AuthForm type="SIGNIN" onSubmit={onSubmit} />
    </div>
  );
}
