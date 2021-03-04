/**
 * Creates a new account and returns an access token.
 * @param email
 * @param password
 */
export async function signin(email: string, password: string): Promise<void> {
  const res = await fetch("/api/auth/signin", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  })
  if (!res.ok) {
    throw new Error(await res.text())
  }
}
