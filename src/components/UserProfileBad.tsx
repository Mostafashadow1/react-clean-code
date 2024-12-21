import { useState, useEffect } from "react";

interface UserProfileBadProps {
  userId: number;
}

type IUser = {
  name: string;
  email: string;
  isActive: boolean;
};
export default function UserProfileBad({ userId }: UserProfileBadProps) {
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    fetch(`https://api.example.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        const isActive =
          data.accountStatus === "active" &&
          new Date(data.lastLogin) >=
            new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

        setUser({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          isActive,
        });
      });
  }, [userId]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {user.name} is {user.isActive ? "active" : "inactive"}
    </div>
  );
}
