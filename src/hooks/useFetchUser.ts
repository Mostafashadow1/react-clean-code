export function useFetchUser(userId: { userId: number }) {
  const url = `https://api.example.com/users/${userId}`;

  return fetch(url).then((response) => response.json());
}
