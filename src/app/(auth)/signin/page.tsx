"use client";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { signIn } from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AuthTitle from "@/app/components/AuthTitle";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";

const Page = () => {
  const { user } = useAuthContext();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const router = useRouter();
  const handleForm = async (event: any) => {
    event.preventDefault();
    const { result, error } = await signIn(
      credentials.email,
      credentials.password
    );
    if (error) {
      return console.log(error);
    }
    console.log(result);
    return router.push("/");
  };
  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setCredentials((prevInputs) => ({ ...prevInputs, [name]: value }));
  };
  useEffect(() => {
    if (user) router.push("/");
  }, [user, router]);
  return (
    <>
      <AuthTitle>Sign In</AuthTitle>
      <form onSubmit={handleForm} className="space-y-4">
        <FormControl>
          <FormLabel className="text-zinc-300">Email Address</FormLabel>
          <Input
            name="email"
            type="email"
            textColor={"white"}
            focusBorderColor="#fff"
            className="border-0"
            onChange={handleInput}
          />
        </FormControl>
        <FormControl>
          <FormLabel className="text-zinc-300">Password</FormLabel>
          <Input
            name="password"
            onChange={handleInput}
            type="password"
            focusBorderColor="#fff"
            textColor={"white"}
            className="border-0"
          />
        </FormControl>
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>

      <p className="text-center mt-5 text-zinc-300">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-white font-bold hover:underline">
          Sign Up
        </Link>
      </p>
    </>
  );
};
export default Page;
