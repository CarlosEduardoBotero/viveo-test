import UserCard from "../user-card";
import { UsersResponse } from "./users-list.interface";

export default async function UsersList(params: {
  page: string;
  gender: string;
  nat: string;
}) {
  const queryParamsString = new URLSearchParams(params).toString();

  const res = await fetch(
    `https://randomuser.me/api/?${queryParamsString}&results=10&inc=gender,name,nat,email,location,picture,id`
  );
  const data: UsersResponse = await res.json();
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {data.results.map((user) => (
        <UserCard
          key={user.id.value}
          picture={user.picture.large}
          name={user.name}
          nat={user.nat}
          gender={user.gender}
          email={user.email}
          city={user.location.city}
          state={user.location.state}
        />
      ))}
    </div>
  );
}
