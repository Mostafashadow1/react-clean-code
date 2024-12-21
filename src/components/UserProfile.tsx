import { useEffect, useState } from "react";
import { useFetchUser } from "../hooks/useFetchUser";
import { normalizeUser } from "../utils/normlizeData";
import { UserStatus } from "./UserStatus";

export type IUser = {
  name: string;
  email: string;
  isActive: boolean;
};
export function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<null | IUser>(null);
  useEffect(() => {
    useFetchUser({ userId }).then((data) => setUser(normalizeUser(data)));
  }, [userId]);
  return <UserStatus user={user} />;
}
