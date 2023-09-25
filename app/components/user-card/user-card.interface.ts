import { Name } from "../users-list/users-list.interface";

export interface UserCardProps {
  gender: "male" | "female";
  name: Name;
  nat: string;
  email: string;
  city: string;
  picture: string;
  state: string;
}
