"use client";

import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
// import Highlight from "@tiptap/extension-highlight";
// import TaskList from "@tiptap/extension-task-list";
// import TaskItem from "@tiptap/extension-task-item";
// import Typography from "@tiptap/extension-typography";
import Image from "@tiptap/extension-image";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Code,
  Link as LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Undo,
  Redo,
  Image as ImageIcon,
} from "lucide-react";

export default function TiptapWYSIWYGEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TextStyle,
    //   Highlight,
    //   TaskList,
    //   TaskItem,
    //   Typography,
      Image,
    ],
    content: `
      <div class="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <header class="text-center border-b pb-4 mb-4">
      <h1 class="text-2xl font-bold text-gray-900">John Doe</h1>
      <p class="text-gray-600">New York, NY | 123-456-7890 | john.doe@email.com</p>
      <p class="text-blue-500"><a href="https://linkedin.com/johndoe">linkedin.com/johndoe</a></p>
    </header>

    <section class="mb-6">
      <h2 class="text-xl font-semibold text-gray-800 border-b pb-2">Summary of Qualifications</h2>
      <p class="text-gray-700 mt-2">Experienced Full Stack Engineer with a strong background in software solutions. Skilled in cross-functional collaboration and the entire software development life cycle. Proficient in front-end and back-end development, various coding languages, and development frameworks.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold text-gray-800 border-b pb-2">Education</h2>
      <p class="font-medium text-gray-900">University Name <span class="float-right text-gray-500">May 20XX</span></p>
      <p class="italic text-gray-700">Bachelor of Science in Computer Science</p>
      <p class="text-gray-600">Relevant Courses: Data Structures, Algorithms, Software Engineering, AI</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold text-gray-800 border-b pb-2">Technical Proficiencies</h2>
      <p class="text-gray-700"><strong>Languages:</strong> HTML, CSS, JavaScript</p>
      <p class="text-gray-700"><strong>Frameworks:</strong> React, Angular, Node.js</p>
      <p class="text-gray-700"><strong>Databases:</strong> MySQL, MongoDB</p>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold text-gray-800 border-b pb-2">Experience</h2>
      <p class="font-medium text-gray-900">Company Name <span class="float-right text-gray-500">Month Year - Month Year</span></p>
      <p class="italic text-gray-700">Position Title - Location</p>
      <ul class="list-disc pl-5 text-gray-700 mt-2">
        <li>Describe your responsibilities and achievements in this role.</li>
        <li>Highlight projects you worked on and technologies you used.</li>
        <li>Showcase teamwork, problem-solving, and communication skills.</li>
      </ul>
    </section>

    <section class="mb-6">
      <h2 class="text-xl font-semibold text-gray-800 border-b pb-2">Projects</h2>
      <p class="font-medium text-gray-900">Project Name <span class="float-right text-gray-500">Month Year</span></p>
      <p class="text-gray-700">Description: Brief overview of the project, your role, and the technologies used.</p>
    </section>

    <section>
      <h2 class="text-xl font-semibold text-gray-800 border-b pb-2">Skills</h2>
      <p class="text-gray-700">UI/UX Design, English Language Skills, Self-Starter, Project Management</p>
      <p class="text-gray-700">Experience with AI/ML models, big data tools like Hadoop, Spark, Kafka.</p>
    </section>
  </div>
    `,
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => window.history.back()}
            className="text-purple-400 hover:text-purple-300 flex items-center gap-2"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-semibold">Make Further Edits & Download</h1>
          <div className="w-[100px]"></div>
        </div>

        <div className="bg-[#2A2A2A] rounded-lg p-2 mb-4">
          <div className="flex flex-wrap gap-1 items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
            >
              <Undo className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
            >
              <Redo className="h-4 w-4" />
            </Button>
            <div className="w-[1px] h-6 bg-gray-600 mx-1" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "bg-white/10" : ""}
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "bg-white/10" : ""}
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive("underline") ? "bg-white/10" : ""}
            >
              <UnderlineIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive("strike") ? "bg-white/10" : ""}
            >
              <Strikethrough className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().toggleCode().run()}
              className={editor.isActive("code") ? "bg-white/10" : ""}
            >
              <Code className="h-4 w-4" />
            </Button>
            <div className="w-[1px] h-6 bg-gray-600 mx-1" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              className={editor.isActive({ textAlign: "left" }) ? "bg-white/10" : ""}
            >
              <AlignLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().setTextAlign("center").run()}
              className={editor.isActive({ textAlign: "center" }) ? "bg-white/10" : ""}
            >
              <AlignCenter className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              className={editor.isActive({ textAlign: "right" }) ? "bg-white/10" : ""}
            >
              <AlignRight className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().setTextAlign("justify").run()}
              className={editor.isActive({ textAlign: "justify" }) ? "bg-white/10" : ""}
            >
              <AlignJustify className="h-4 w-4" />
            </Button>
            <div className="w-[1px] h-6 bg-gray-600 mx-1" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive("bulletList") ? "bg-white/10" : ""}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={editor.isActive("orderedList") ? "bg-white/10" : ""}
            >
              <ListOrdered className="h-4 w-4" />
            </Button>
            <div className="w-[1px] h-6 bg-gray-600 mx-1" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              className={editor.isActive("heading", { level: 1 }) ? "bg-white/10" : ""}
            >
              <Heading1 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={editor.isActive("heading", { level: 2 }) ? "bg-white/10" : ""}
            >
              <Heading2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              className={editor.isActive("heading", { level: 3 }) ? "bg-white/10" : ""}
            >
              <Heading3 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8">
          <EditorContent editor={editor} className="min-h-[500px] text-black" />
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <Button variant="outline" className="bg-[#2A2A2A] text-white border-gray-600">
            Download .Pdf
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Download .Docx
          </Button>
        </div>
      </div>
    </div>
  );
}