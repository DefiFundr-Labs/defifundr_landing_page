"use client";

import {
  useForm,
  type SubmitHandler,
  type SubmitErrorHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Mail } from "lucide-react";
import { waitlistSchema } from "../../utils/validation";
import { useWaitList } from "../../hooks/useWaitlist";
import { toast } from "react-toastify";
import { useEffect } from "react";

type FormData = z.infer<typeof waitlistSchema>;

export default function WaitlistForm() {
  const { isPending, error, joinWaitlist } = useWaitList();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    clearErrors,
  } = useForm<FormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      full_name: "",
      email: "",
    },
    mode: "onSubmit",
  });

  // Handle external errors from the hook
  useEffect(() => {
    if (error) {
      setError("root", {
        type: "server",
        message: error.message || "Something went wrong. Please try again.",
      });
    }
  }, [error, setError]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      clearErrors();

      await joinWaitlist(data);

      toast("Thank you for joining our waitlist! We'll be in touch soon.", {
        className:
          "mt-4 border rounded-md p-3 text-center animate-fade-in absolute border-[#10B981]/50 text-white bg-gradient-to-br from-[#1E0B40] via-[#2D1259] to-[#1A1040] backdrop-md",
        pauseOnHover: true,
        pauseOnFocusLoss: true,
        hideProgressBar: true,
      });

      reset();
    } catch (error) {
      console.error("Waitlist submission error:", error);
      // Error is already handled via the useEffect
    }
  };

  const onError: SubmitErrorHandler<FormData> = (errors) => {
    console.error("Form validation errors:", errors);
  };

  return (
    <div className="backdrop-blur-sm rounded-md p-4 md:p-2 bg-[#1E0B40]/50">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex flex-col items-stretch gap-2 md:flex-row"
        noValidate
      >
        <div className="relative flex-1">
          <input
            type="text"
            id="full_name"
            placeholder="Full Name"
            aria-label="Full Name"
            aria-invalid={!!errors.full_name}
            autoComplete="off"
            className={`w-full h-full rounded-md px-4 py-3 transition-all bg-white/10 focus:bg-white/10 border ${
              errors.full_name ? "border-[#F87171]" : "border-white/20"
            } text-white`}
            {...register("full_name")}
          />
          {errors.full_name && (
            <p
              className="absolute -bottom-5 left-0 text-xs text-[#F87171]"
              role="alert"
            >
              {errors.full_name.message}
            </p>
          )}
        </div>

        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Mail className="w-5 h-5 text-white/50" />
          </div>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            aria-label="Email Address"
            aria-invalid={!!errors.email}
            autoComplete="off"
            className={`w-full h-full rounded-md pl-12 pr-4 py-3 transition-all bg-white/10 border ${
              errors.email ? "border-[#F87171]" : "border-white/20"
            } text-white`}
            {...register("email")}
          />
          {errors.email && (
            <p
              className="absolute -bottom-5 left-0 text-xs text-[#F87171]"
              role="alert"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isPending}
          className={`font-medium px-6 py-3 rounded-md flex items-center justify-center transition-all whitespace-nowrap bg-white text-[#1E0B40] ${
            isPending || isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
          aria-busy={isPending}
        >
          {isPending ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#1E0B40]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            <span className="flex items-center">
              Get Access <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          )}
        </button>
      </form>

      {errors.root && (
        <div
          className="mt-4 border rounded-md p-3 text-center animate-fade-in bg-[#EF4444]/20 border-[#EF4444]/50 text-white"
          role="alert"
        >
          {errors.root.message}
        </div>
      )}
    </div>
  );
}
