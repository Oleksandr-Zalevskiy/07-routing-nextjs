export default function FilterLayout({
  children,
  sidebar,
  modal,
}: {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", position: "relative" }}>
      {sidebar}
      {children}
      {modal}
    </div>
  );
}
