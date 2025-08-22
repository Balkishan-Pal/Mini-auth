import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* Icon */
import LoginIcon from "../assets/Icons/LoginIcon";

interface SignInProps {
  setUser: (u: string | null) => void;
  switchToSignUp?: () => void;
  isModal?: boolean;
}

export default function SignIn({
  setUser,
  switchToSignUp,
  isModal,
}: SignInProps) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allowedAccounts = [
      {
        email: import.meta.env.VITE_DEMO_ACCOUNT_1_EMAIL,
        pass: import.meta.env.VITE_DEMO_ACCOUNT_1_PASS,
      },
      {
        email: import.meta.env.VITE_DEMO_ACCOUNT_2_EMAIL,
        pass: import.meta.env.VITE_DEMO_ACCOUNT_2_PASS,
      },
    ];

    const matchedUser = allowedAccounts.find(
      (acc) => acc.email === email && acc.pass === password
    );

    if (matchedUser) {
      setUser(email);
      setError("");
      navigate("/");
    } else {
      setError("Invalid email or password");
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
            Sign in to continue
          </h2>
          <p className="text-[0.875rem] leading-[1.3125rem] font-normal text-black/50 font-sans">
            Sign in to access all the features on this app
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
                id="email"
                type="email"
                placeholder="Enter your email"
                className="input-style"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-[6px]">
              <label htmlFor="password" className="label-style">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="input-style"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button type="submit" className="btn-style">
              Sign In
            </button>
          </form>
        </div>

        <p className="text-[0.875rem] leading-[1.3125rem] font-medium text-black/60 mt-[10px] ">
          Don’t have an account?{" "}
          {isModal ? (
            <button
              type="button"
              onClick={switchToSignUp}
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </button>
          ) : (
            <Link
              to="/signup"
              className="text-[0.875rem] leading-[1.3125rem] font-semibold text-[#5057EA] hover:underline"
            >
              Sign Up
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}
