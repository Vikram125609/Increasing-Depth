export const metadata = {
  title: "Job Details",
  description: "Generated by Next.js",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="mb-5">Job Details Top</h1>
      {children}
      <h1 className="mt-5">Job Details Bottom</h1>
    </div>
  );
}
