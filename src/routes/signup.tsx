import { z } from "zod";
// import { createAccount } from "@/api";
// import { useNavigate } from "react-router-dom";
import AuthForm from "@/components/auth/auth-form";

const formSchema = z.object({
  username: z.string().trim().toLowerCase().email(),
  password: z.string().min(8).max(255),
});

type FormValues = z.infer<typeof formSchema>;

export default function SignupRoute() {
  // const navigate = useNavigate();

  function onSubmit(values: FormValues) {
    // await createAccount(values.username, values.password);
    // navigate("/signin");
    console.log("Succesfully registed", values.username);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <AuthForm onSubmit={onSubmit} />
    </div>
  );
}
