import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

/* Icon */
import LoginIcon from "../assets/Icons/LoginIcon";

interface SignUpProps {
  setUser: (u: string | null) => void;
  switchToSignIn?: () => void;
  isModal?: boolean;
}

export default function SignUp({
  setUser,
  switchToSignIn,
  isModal,
}: SignUpProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (email && password) {
      setUser(email); // mock login after signup
      if (!isModal) navigate("/"); // only redirect if on routes
    }
  };

  return (
    <div className="w-[100%] flex justify-center items center">
      <div className="w-fit  bg-[#EBEBEB] rounded-[3rem] flex flex-col items-center justify-center p-[0.6875rem] pb-[1.1875rem]  ">
        <div className=" bg-white shadow-[0_0.4rem_1.5rem_rgba(0,0,0,0.03)] rounded-[2.1rem] py-[1.875rem] px-[3.125rem] flex flex-col items-center ">
          <span className="w-[3.3125rem] h-[3.3125rem] bg-[#F8F8F8] rounded-full flex items-center justify-center">
            <LoginIcon />
          </span>
          <h2 className=" mt-[1.3125rem] mb-[0.3125rem] text-[1.25rem] leading-[1.3125rem] font-bold text-black font-sans">
            Create an account to continue
          </h2>
          <p className="text-[0.875rem] leading-[1.3125rem] font-normal text-black/50 font-sans">
            Create an account to access all the features on this app{" "}
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 mt-[4.0625rem] mb-[3.75rem] gap-[1rem] "
          >
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="email" className="label-style">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input-style"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label htmlFor="password" className="label-style">
                Passowrd
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input-style"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label htmlFor="password" className="label-style">
                Passowrd
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input-style"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-style">
              Sign Up
            </button>
          </form>
        </div>
        <p className="text-[0.875rem] leading-[1.3125rem] font-medium text-black/60 mt-[10px] ">
          Already have an account?{" "}
          {isModal && switchToSignIn ? (
            <button
              type="button"
              onClick={switchToSignIn}
              className="text-blue-500 underline"
            >
              Sign In
            </button>
          ) : (
            <Link
              to="/signin"
              className="text-[0.875rem] leading-[1.3125rem] font-semibold text-[#5057EA] hover:underline"
            >
              Sign In
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}
