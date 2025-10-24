import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./CreateNote.module.css";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Create a New Note | Note Hub",
  description:
    "Quickly create and save your personal notes with Note Hub — simple, fast, and organized.",
  openGraph: {
    title: "Create a New Note | Note Hub",
    description:
      "Start capturing your ideas instantly with Note Hub — a clean, reliable notebook that keeps your thoughts safe and accessible.",
    url: "https://08-zustand-red-six.vercel.app/notes/action/create",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub create note preview",
      },
    ],
    type: "website",
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
        <Toaster />
      </div>
    </main>
  );
}
