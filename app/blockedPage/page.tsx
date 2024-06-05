import Link from "next/link";
const blockedPage = () => {
  return (
    <div>
      <h1>Sorry. You do not have access to this page.</h1>
      <Link href="/home">Go back to home</Link>
    </div>
  );
};

export default blockedPage;
