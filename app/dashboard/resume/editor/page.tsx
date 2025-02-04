import { TiptapEditor } from "@/components/tiptap-editor";

export default function ResumeEditor() {
    return (
        <div className="container mx-auto py-8">
          <h1 className="mb-8 text-3xl font-bold">Resume Editor</h1>
          <TiptapEditor placeholder="Start writing your content..." />
        </div>
      );
}