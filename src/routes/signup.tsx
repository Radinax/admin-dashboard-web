import { z } from "zod";
import { createAccount } from "@/api/auth";
import { useNavigate } from "react-router-dom";
import AuthForm from "@/features/auth/components/auth-form/auth-form";
import { toast } from "sonner";
import { formSchema } from "@/schemas";

type FormValues = z.infer<typeof formSchema>;

export default function SignupRoute() {
  const navigate = useNavigate();

  function onSubmit(values: FormValues) {
    const op = createAccount(values.username, values.password, values.email);
    toast.promise(op, {
      success: () => {
        navigate("/login");
        return "Your account was just created";
      },
      error: (error: unknown) => {
        console.log({ error });
        return "Something went wrong while creating account";
      },
      loading: "Creating account...",
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <AuthForm type="REGISTER" onSubmit={onSubmit} />
    </div>
  );
}
