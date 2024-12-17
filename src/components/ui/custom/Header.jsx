import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout } from "@react-oauth/google";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { FaHome } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Mytrips from "@/my-trips";

import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [openDailog, setOpenDailog] = useState(false);
  useEffect(() => {
    console.log(user);
  }, []);
  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: " Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp?.data));
        setOpenDailog(false);
        window.location.reload();
      });
  };

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  return (
    <div className="p-3 shadow-sm flex justify-between items-center bg-white ">
      <a href="/">
        <img
          src="/log.png"
          width="50"
          height="50"
          className="rounded-full transition-all hover:scale-105"
          alt="Travel Gpt Logo"
        />
      </a>

      <div className="">
        <img src="logog.png" width="200" height="200" />
      </div>
      <div>
        {user ? (
          <div className="flex items-center gap-1">
            <a href="/create-trip">
              <Button variant="outline" className="rounded-full ">
                <IoIosAddCircle />
                Trip
              </Button>
            </a>
            <a href="/my-trips">
              <Button variant="outline" className="rounded-full ">
                Travelled
              </Button>
            </a>

            <Popover>
              <PopoverTrigger className="bg-transparent  hover:scale-105  transition-all">
                <img
                  src={user?.picture ? user.picture : "/avatar.jpeg"}
                  className="h-[38px] w-[38px] rounded-full cursor-pointer"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="cursor-pointer"
                  onClick={() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Log-out
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDailog(true)}>Sign In</Button>
        )}
      </div>
      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader className="flex justify-between items-center  flex-row ">
            <DialogTitle className=" font-bold ml-10 mt-4 md-3">
              Just One Step Away
            </DialogTitle>
            <DialogClose
              onClick={() => setOpenDailog(false)}
              className="text-white bg-red-500 p-2 rounded-xs w-10"
            >
              X
            </DialogClose>
          </DialogHeader>
          <DialogDescription>
            <img src="/logo2.png" />
            <h2 className="font-bold text-lg mt-7">Sign In With Google </h2>
            <p>Sign in to the App with Google authentication securly</p>
            <Button
              onClick={login}
              className="w-full mt-5 flex gap-4 items-center"
            >
              <FcGoogle className="h-10 w-10" />
              Sign In With Google
            </Button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
