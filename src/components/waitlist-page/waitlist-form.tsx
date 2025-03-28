"use client";

import {
  useForm,
  type SubmitHandler,
  type SubmitErrorHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Mail } from "lucide-react";
import { useEffect } from "react";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name must be less than 50 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type FormData = z.infer<typeof formSchema>;

export default function WaitlistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
    clearErrors,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      setError("root", {
        type: "server",
        message:
          "There was a problem submitting your information. Please try again.",
      });
    }
  };

  const onError: SubmitErrorHandler<FormData> = (errors) => {
    console.error("Form validation errors:", errors);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => {
        reset();
        clearErrors();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, reset, clearErrors]);

  return (
    <div className="backdrop-blur-sm rounded-md p-4 md:p-2 bg-[#1E0B40]/50">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex flex-col md:flex-row items-stretch gap-2"
      >
        <div className="relative flex-1">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            aria-label="First Name"
            aria-invalid={!!errors.firstName}
            className={`w-full h-full rounded-md px-4 py-3 transition-all bg-white/10 border ${
              errors.firstName ? "border-[#F87171]" : "border-white/20"
            } text-white`}
            {...register("firstName")}
          />
          {errors.firstName && (
            <p
              className="absolute -bottom-5 left-0 text-xs text-[#F87171]"
              role="alert"
            >
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Mail className="h-5 w-5 text-white/50" />
          </div>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            aria-label="Email Address"
            aria-invalid={!!errors.email}
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
          disabled={isSubmitting}
          className={`font-medium px-6 py-3 rounded-md flex items-center justify-center transition-all whitespace-nowrap bg-white text-[#1E0B40] ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#1E0B40]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
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
              Get Access <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          )}
        </button>
      </form>

      {errors.root && (
        <div className="mt-4 border rounded-md p-3 text-center animate-fade-in bg-[#EF4444]/20 border-[#EF4444]/50 text-white">
          {errors.root.message}
        </div>
      )}

      {isSubmitSuccessful && !errors.root && (
        <div className="mt-4 border rounded-md p-3 text-center animate-fade-in bg-[#10B981]/20 border-[#10B981]/50 text-white">
          Thank you for joining our waitlist! We'll be in touch soon.
        </div>
      )}
    </div>
  );
}
