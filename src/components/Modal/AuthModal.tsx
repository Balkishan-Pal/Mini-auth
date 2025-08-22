import { useEffect } from "react";
import type { ReactNode } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function AuthModal({ isOpen, onClose, children }: AuthModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className=" h-full w-full fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-out animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-transparent rounded-lg shadow-lg p-6 max-w-md w-full relative transform transition-all duration-300 ease-out scale-95 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-12 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
