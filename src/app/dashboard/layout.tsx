export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="h-screen flex gap-10">
      <div className="w-[14%] bg-red-50">
        l
      </div>

      <div className="w-[86%] bg-blue-200">r</div>
      </div>
  );
}