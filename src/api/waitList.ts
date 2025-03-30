import axios from "axios";
import { WaitListFormProps } from "../types/interface";
export const registerWaitList = async ({
  firstName,
  email,
}: {
  firstName: string;
  email: string;
}): Promise<WaitListFormProps> => {
  //make sure to  change this api end point to match the waitlist registration end point
  const response = await axios.post("https://reqres.in/api/users", {
    firstName,
    email,
  });
  return response.data;
};
