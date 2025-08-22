export function formatNameFromEmail(email: string): string {
  if (!email) return "";

  const [localPart] = email.split("@");

  if (localPart.includes(".")) {
    const parts = localPart.split(".");
    return parts
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  } else {
    return localPart.charAt(0).toUpperCase() + localPart.slice(1);
  }
}

