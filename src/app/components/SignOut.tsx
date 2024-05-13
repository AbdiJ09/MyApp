import { signOutUser } from "@/firebase/auth/signout";

const SingOut = () => {
  const handleSignOut = async () => {
    await signOutUser();
  };
  return (
    <>
      <button
        onClick={handleSignOut}
        className="text-white p-3 bg-zinc-700 font-bold rounded-xl mx-auto block me-0 mb-3"
      >
        Sign Out
      </button>
    </>
  );
};
export default SingOut;
