import Link from "next/link";

// src/pages/index.tsx
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Travel Planner App</h1>
      <Link href="/auth/signup">Sign Up</Link>
      <Link href="/auth/login">Login</Link>
    </div>
  );
};

export default HomePage;
