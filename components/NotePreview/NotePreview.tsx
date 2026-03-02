"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import Modal from "../Modal/Modal";
import css from "./NotePreview.module.css";

export default function NotePreview({ id }: { id: string }) {
  const { data } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (!data) return null;

  return (
    <Modal>
      <div className={css.container}>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
      </div>
    </Modal>
  );
}
