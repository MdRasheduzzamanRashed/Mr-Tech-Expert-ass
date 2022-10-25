import React, { useContext, useState } from "react";
import { Label, TextInput, Button } from "flowbite-react";
import { toast } from "react-hot-toast";
import { AuthContext } from "./../../../context/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState();

  const [accepted, setAccepted] = useState(false);

  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((e) => {
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success("Please verify your email.");
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = { displayName: name, photoURL: photoURL };
    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => console.error(e));
  };
  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((e) => console.error(e));
  };
  return (
    <div className="w-1/2 mx-auto mb-8">
      <h3 className="text-center text-2xl font-medium my-5">Please register</h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label value="Your name" />
          </div>
          <TextInput
            name="name"
            type="text"
            placeholder="Enter your name"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Photo link" />
          </div>
          <TextInput
            name="photoURL"
            type="text"
            placeholder="Enter your photo url/link"
            required={true}
          />
        </div>
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
        <div>
          <Label className="text-red">{error}</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Register;
