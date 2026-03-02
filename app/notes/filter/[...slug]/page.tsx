import NotesClient from "./Notes.client";

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

export default async function FilterPage({ params }: PageProps) {
  const { slug } = await params;

  const tagFromUrl = slug?.[0] ?? "all";

  return <NotesClient initialTag={tagFromUrl} />;
}
