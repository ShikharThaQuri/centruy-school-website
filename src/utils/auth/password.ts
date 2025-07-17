import crypto from "crypto";

export function createPassword(password: string) {
  const salt = crypto.randomBytes(32).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return {
    hash,
    salt,
  };
}

export function verifyPassword(password: string, hash: string, salt: string) {
  const verifyHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return verifyHash === hash;
}
