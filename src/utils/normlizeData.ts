import { isUserActive } from "./isUserActive";

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  lastLogin: string | number | Date;
  accountStatus: string;
};

interface normalizeUserProps {
  userData: UserData;
}

export function normalizeUser({ userData }: Readonly<normalizeUserProps>) {
  const isActive = isUserActive({ user: userData });

  return {
    name: `${userData.firstName} ${userData.lastName}`,
    email: userData.email,
    isActive,
  };
}
