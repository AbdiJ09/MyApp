const AuthTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-center font-bold text-2xl mb-5 uppercase tracking-wide text-white">
      {children}
    </h1>
  );
};
export default AuthTitle;
