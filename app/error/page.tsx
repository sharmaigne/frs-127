import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="flex justify-center">
      <h1>Sorry, something went wrong.</h1>
      <Link href="/">
        <a>Go back to home.</a>
      </Link>
    </div>
  );
}