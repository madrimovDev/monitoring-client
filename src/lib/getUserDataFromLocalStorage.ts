export async function getUserDataFromLocalStorage<T extends keyof Auth.User>(
  key: T,
): Promise<Auth.User[T] | null> {
  const user = window.localStorage.getItem('user');

  if (user === null) {
    return null;
  }

  try {
    const data = JSON.parse(user) as Auth.User;
    return data[key];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error parsing user data from localStorage:', error);
    return null;
  }
}
