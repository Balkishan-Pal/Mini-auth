import { useNavigate } from "react-router-dom";

/* Icon */
import LoginIcon from "../../assets/Icons/LoginIcon";

interface NavbarProps {
  user: string | null;
  setUser: (u: string | null) => void;
}

export default function Navbar({ user, setUser }: NavbarProps) {
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (user) {
      setUser(null);
      navigate("/");
    } else {
      navigate("/signin");
    }
  };

  return (
    <nav className="flex justify-between py-[20px] p-[30px] sticky top-[0px] bg-white z-50 ">
      <h1
        onClick={() => navigate("/")}
        className="text-lg font-bold cursor-pointer"
      >
        My App
      </h1>
      <div>
        <button
          onClick={handleAuthClick}
          className="flex  items-center
        font-inter font-semibold text-[1.2rem] leading-[1.0625rem] 
       text-black gap-[8px]"
        >
          {user ? "Logout" : `Login`}
          {!user && <LoginIcon />}
        </button>
      </div>
    </nav>
  );
}
