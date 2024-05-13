"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (user == null) router.push("/");
  }, [user, router]);
  return (
    <>
      <h1 className="text-white">Only logged in users can see this page</h1>
    </>
  );
};
export default Page;
