import Header from "./header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="py-16">{children}</main>
    </>
  );
}
