import addData from "@/firebase/firestore/addData";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const FormAddData = () => {
  const toast = useToast();
  const [inputs, setInputs] = useState({ name: "", house: "" });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleForm = async (e: any) => {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2, 9);
    const { name, house } = inputs;
    const data = { name, house };
    const { message, error } = await addData("users", id, data);
    toast({
      title: "Success",
      description: message,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    e.target.reset();
    if (error) console.log(error);
  };
  return (
    <>
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
    </>
  );
};

export default FormAddData;
