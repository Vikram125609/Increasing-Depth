export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="mb-5">Find Jobs USA Page Starts</h1>
      {children}
      <h1 className="mt-5">Find Jobs USA Page Ends</h1>
    </div>
  );
}
