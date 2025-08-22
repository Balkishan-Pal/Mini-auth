interface Account {
  email: string;
  password: string;
}

const raw = import.meta.env.VITE_DEMO_ACCOUNTS as string;
console.log("Raw demo accounts:", raw);

// Split into array of accounts
export const demoAccounts: Account[] = raw.split(",").map((entry) => {
  const [email, password] = entry.split(":");
  return { email, password };
});
