"use client";
import addData from "@/firebase/firestore/addData";
import getDocument from "@/firebase/firestore/getData";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [inputs, setInputs] = useState({ name: "", house: "" });
  const [users, setUsers] = useState<any>([]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleForm = async () => {
    const id = Math.random().toString(36).substring(2, 9);
    const { name, house } = inputs;
    const data = { name, house };
    const { message, error } = await addData("users", id, data);
    if (error) console.log(error);
    console.log(message);
  };

  const getData = async () => {
    const { data, error } = await getDocument("users");
    if (error) console.log(error);
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="w-full h-screen flex justify-center  items-center gap-10">
        <div className="border border-zinc-800 w-1/3  p-10 rounded-xl">
          <h1 className="text-center font-bold text-2xl mb-5 uppercase tracking-wide text-white">
            Add Data
          </h1>
          <form onSubmit={handleForm} className="space-y-8">
            <FormControl>
              <FormLabel className="text-zinc-300">Name</FormLabel>
              <Input
                name="name"
                type="text"
                borderColor={"#3f3f46"}
                onChange={handleInputChange}
                color={"white"}
                focusBorderColor="#52525b"
              />
            </FormControl>
            <FormControl>
              <FormLabel className="text-zinc-300">House</FormLabel>
              <Input
                name="house"
                type="text"
                onChange={handleInputChange}
                borderColor={"#3f3f46"}
                color={"white"}
                focusBorderColor="#52525b"
              />
            </FormControl>
            <Button type="submit" className="w-full mt-4">
              Save
            </Button>
          </form>
        </div>
        <div className="">
          <TableContainer>
            <Table variant={"unstyled"}>
              <Thead>
                <Tr>
                  <Th color={"white"}>Name</Th>
                  <Th color={"white"}>House</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users?.map((user: any) => (
                  <Tr key={user.id}>
                    <Td color={"white"}>{user.name}</Td>
                    <Td color={"white"}>{user.house}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}
