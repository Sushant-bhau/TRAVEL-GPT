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
    <div className=" shadow-sm flex justify-between items-center bg-white ">
      <div className="flex flex-row gap-1">
        <a href="/">
          <img
            src="/log.png"
            width="50"
            height="50"
            className="rounded-full transition-all hover:scale-105"
            alt="Travel Gpt Logo"
          />
        </a>
        <h2 className="text-[#646cff] font-bold mt-1 text-3xl">TRAVEL GPT</h2>
      </div>
      <div>
        {user ? (
          <div className="flex items-center gap-1 ">
            <a href="/create-trip">
              <Button variant="outline" className="rounded-full ">
                <IoIosAddCircle />
                Trip
              </Button>
            </a>

            <Popover className="h-[38px] w-[5px] rounded-full cursor-pointer">
              <PopoverTrigger className="bg-transparent  hover:scale-105  transition-all">
                <img
                  src={user?.picture ? user.picture : "/avatar.jpeg"}
                  className="h-[28px] w-[28px] rounded-full cursor-pointer"
                />
                <h2 className="text-[#646cff]   font-bold text-sm">Profile</h2>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex flex-col gap-5 p-2 ">
                  <a href="/">
                    <h2 variant="outline" className="rounded-full ">
                      Home
                    </h2>
                  </a>
                  <a href="/my-trips">
                    <h2 variant="outline" className="rounded-full ">
                      My Trips
                    </h2>
                  </a>
                  <a href="/">
                    <h2
                      className="cursor-pointer text-[#646cff]  "
                      onClick={() => {
                        googleLogout();
                        localStorage.clear();

                        window.location.reload();
                      }}
                    >
                      Log-out
                    </h2>
                  </a>
                </div>
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
            <DialogTitle className=" font-bold ml-36 mr-10 mt-4 md-3">
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
            <img
              src="/logo.jpeg"
              className="h-[300px] w-[500px] justify-center border-2 border-black rounded"
            />
            <h2 className="font-bold text-lg mt-7 text-black">
              Sign In With Google{" "}
            </h2>
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
