import { useState } from "react";
import apiService, { WaitlistData } from "../service/api";

interface UseWaitlistReturn {
  isPending: boolean;
  error: Error | null;
  joinWaitlist: (data: WaitlistData) => Promise<any>;
}

export function useWaitList(): UseWaitlistReturn {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const joinWaitlist = async (data: WaitlistData) => {
    try {
      setIsPending(true);
      setError(null);

      const result = await apiService.joinWaitlist(data);
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to join waitlist. Please try again.";

      const error = new Error(errorMessage);
      setError(error);
      throw error;
    } finally {
      setIsPending(false);
    }
  };

  return {
    isPending,
    error,
    joinWaitlist,
  };
}
