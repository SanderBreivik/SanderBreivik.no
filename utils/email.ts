/**
 * Decodes the base64-encoded email address
 * @returns The decoded email address
 */
export const getDecodedEmail = (): string => {
  // Base64 encoded email: me@sanderbreivik.no
  const encoded = "bWVAc2FuZGVyYnJlaXZpay5ubw==";
  return atob(encoded);
};
