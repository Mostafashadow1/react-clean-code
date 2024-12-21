type user = {
  lastLogin: string | number | Date;
  accountStatus: string;
};

interface isUserActiveProps {
  user: user;
}

export function isUserActive({ user }: Readonly<isUserActiveProps>) {
  const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
  const wasLoggedInDuringLastThirtyDays =
    new Date(user.lastLogin) >= new Date(Date.now() - thirtyDaysInMs);

  return user.accountStatus === "active" && wasLoggedInDuringLastThirtyDays;
}
