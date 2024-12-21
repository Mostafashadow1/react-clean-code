import { IUser } from "./UserProfile";

interface UserStatusProps {
  user: IUser | null;
}
export function UserStatus({ user }: UserStatusProps) {
  if (!user) return null;
  return (
    <div>
      <h2>
        {user.name} is {user.isActive ? "Active" : "unActive"}
      </h2>
    </div>
  );
}
