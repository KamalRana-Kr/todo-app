import bcrypt from 'bcrypt';

export async function hashPassword(
  password: string
): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  const data = bcrypt.hash(password, salt);
  return data;
}

export async function comparePasswords(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  const data = bcrypt.compare(plainPassword, hashedPassword);
  return data;
}
