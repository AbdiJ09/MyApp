"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SingOut from "./components/SignOut";
import FormAddData from "./components/FormAddData";
import ListData from "./components/ListData";

export default function Home() {
  const router = useRouter();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user == null) router.push("/signin");
  }, [user, router]);

  return (
    <>
      <div className="w-full h-screen flex justify-center  items-center gap-10">
        <FormAddData />
        <div className="">
          <SingOut />
          <div className="text-white grid grid-cols-3 gap-4 h-fit max-h-96 overflow-y-scroll">
            <ListData />
          </div>
        </div>
      </div>
    </>
  );
}
