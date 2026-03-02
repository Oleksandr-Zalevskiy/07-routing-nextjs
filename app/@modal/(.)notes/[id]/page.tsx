import NotePreview from "@/components/NotePreview/NotePreview";

interface Props {
  params: {
    id: string;
  };
}

export default function ModalPage({ params }: Props) {
  return <NotePreview id={params.id} />;
}
