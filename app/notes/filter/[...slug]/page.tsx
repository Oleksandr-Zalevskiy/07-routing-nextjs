import NotesClient from "@/components/NotesClient/NotesClient";

interface Props {
  params: {
    slug?: string[];
  };
}

export default function FilterPage({ params }: Props) {
  const tag = params.slug?.[0];

  const normalizedTag = tag === "all" ? undefined : tag;

  return <NotesClient tag={normalizedTag} />;
}
