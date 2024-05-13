const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/3 shadow-md border border-zinc-700 p-7 rounded-xl">
        {children}
      </div>
    </div>
  );
};
export default AuthLayout;
