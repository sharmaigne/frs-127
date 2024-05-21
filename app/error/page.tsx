import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className="flex-col justify-center items-center w-screen h-screen">
      <h2>Sorry, something went wrong.</h2>
      <Link href="/">
        Go back to home.
      </Link>
    </div>
  );
}

export default ErrorPage;