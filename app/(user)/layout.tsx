import Navbar from "@/app/(user)/components/Navbar";
const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default UserLayout;
