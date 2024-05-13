import getDocument from "@/firebase/firestore/getData";
import { useEffect, useState } from "react";

const ListData = () => {
  const [users, setUsers] = useState<any>([]);

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
      {users
        ? users?.map((user: any) => (
            <div
              key={user.id}
              className="flex gap-10 border border-zinc-700 p-5 rounded-xl"
            >
              <div className="flex flex-col">
                <span>Nama</span>
                <h3 className="text-zinc-400">{user.name}</h3>
              </div>
              <div className="flex flex-col">
                <span>House</span>
                <h3 className="text-zinc-400">{user.house}</h3>
              </div>
            </div>
          ))
        : null}
    </>
  );
};
export default ListData;
