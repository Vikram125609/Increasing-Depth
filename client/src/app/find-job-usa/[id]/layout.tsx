export const metadata = {
  title: "Find Jobs USA",
  description: "Generated by Next.js",
}

export default function Layout({ children, params }: { children: React.ReactNode, params : { id: string } }) {
  return (
    <div>
      <h1 className="mb-5">Find Jobs USA Page {params.id} Starts</h1>
      {children}
      <h1 className="mt-5">Find Job USA Page {params.id} Ends</h1>
    </div>
  );
}
