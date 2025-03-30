import { useMutation } from "@tanstack/react-query";
import { registerWaitList } from "../api/waitList";

export const useWaitList = () => {
  return useMutation({ mutationFn: registerWaitList });
};
