import NavbarRoute from "@/components/NavbarRoute";
import NotificationsIcon from "@/public/icons/notifications";
import TuneIcon from "@/public/icons/tune";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full bg-primary h-[60px] top-0 sticky z-10">
      <div className="flex">
        <NavbarRoute text="Home" href={{ pathname: "/home" }} />
        <NavbarRoute
          text="Calendar View"
          href={{ pathname: "/calendar-view" }}
        />
        <NavbarRoute text="Requests" href={{ pathname: "/requests" }} />
      </div>

      {/* RIGHT SIDE: filter, notifs, profile */}
      <div className="flex items-center gap-4 mr-14">
        <TuneIcon className="w-[30px] h-[30px] fill-light" />
        <NotificationsIcon className="w-[30px] h-[30px] fill-light" />
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
