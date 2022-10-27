import { Label, TextInput, Button } from "flowbite-react";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../../context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState();
  const { signIn, setLoading, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((r) => {
        const user = r.user;
        form.reset();
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email is not verified, Please verified email first."
          );
        }
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((r) => {
        const user = r.user;
        console.log(user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((e) => console.error(e));
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((r) => {
        const user = r.user;
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email is not verified, Please verified email first."
          );
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="w-1/2 mx-auto mb-8 h-screen mt-20">
      <h3 className="text-center dark:text-orange-500 text-3xl font-medium my-8">
        Please login
      </h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label value="Your email" />
          </div>
          <TextInput
            name="email"
            type="email"
            placeholder="Enter your email"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Your password" />
          </div>
          <TextInput name="password" type="password" required={true} />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <Button color="gray" onClick={handleGoogleSignIn}>
            Login with <FaGoogle className="ml-2 text-2xl"></FaGoogle>
          </Button>
          <Button color="gray" onClick={handleGithubSignIn}>
            Login with <FaGithub className="ml-2 text-2xl"></FaGithub>
          </Button>
        </div>
        <div>
          <Label className="text-red">{error}</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
