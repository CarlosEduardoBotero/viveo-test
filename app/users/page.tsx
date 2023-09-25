import { Suspense } from "react";
import UsersList from "../components/users-list";
import Loading from "./loading";

export default async function Users({
  searchParams: { page = "1", gender, nat },
}: {
  searchParams: { page: string; gender: string; nat: string };
}) {
  return (
    <div className="" key={page + gender + nat}>
      <Suspense fallback={<Loading />}>
        <UsersList page={page} gender={gender} nat={nat} />
      </Suspense>
    </div>
  );
}
