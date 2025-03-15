"use client";

import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import FontFamily from "@tiptap/extension-font-family";
import Blockquote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import BulletList from "@tiptap/extension-bullet-list";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block";
import Dropcursor from "@tiptap/extension-dropcursor";
import Gapcursor from "@tiptap/extension-gapcursor";
import HardBreak from "@tiptap/extension-hard-break";
import Heading from "@tiptap/extension-heading";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Italic from "@tiptap/extension-italic";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Strike from "@tiptap/extension-strike";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Placeholder from "@tiptap/extension-placeholder";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Image from "@tiptap/extension-image";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Typography from "@tiptap/extension-typography";
import { Button } from "@/components/ui/button";
import {
  BoldIcon,
  ItalicIcon,
  Underline as UnderlineIcon,
  Strikethrough,
  CodeIcon,
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
  Quote,
  Code2,
  Minus,
  ListChecks,
  Printer,
  TypeIcon,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import '@/styles/resume.css'

export default function TiptapWYSIWYGEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Text,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TextStyle,
      Blockquote,
      Bold,
      BulletList,
      Code,
      CodeBlock,
      Dropcursor,
      Gapcursor,
      HardBreak,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      HorizontalRule,
      Italic,
      ListItem,
      OrderedList,
      Strike,
      Placeholder,
      Table,
      TableCell,
      TableHeader,
      TableRow,
      Image,
      TaskList,
      TaskItem,
      Typography,
      FontFamily,
    ],

    content: `
      <div class="container">
    <header class="contact-info">
      <p class="name">First Last Name</p>
      <p class="details">Hammond, LA | 555-555-5555 | first.last@selu.edu | issuu.com/eengineersample</p>
    </header>

    <section class="section">
      <h1>SUMMARY OF QUALIFICATIONS</h1>
      <div class="hr"></div>
      <p>Experienced in designing solutions for environmental problems that require integration of environmental and human health constraints compatible with economic growth, sustainable development, and ethical standards.</p>
      <p>Proficient with a variety of modeling and drafting software including AutoCAD and ALGOR.</p>
      <p>Efficiently manage projects and collaborate with teams to accelerate the overarching goals of the company.</p>
    </section>

    <section class="section">
      <h1>EDUCATION</h1>
      <p><strong>Southeastern Louisiana University</strong> <span class="date-range">May 2024</span></p>
      <p><em>Bachelor of Science in Engineering Technology</em></p>
      <p>Concentration: Electrical Energy Engineering</p>
      <p>Cumulative GPA: 3.75/4.00</p>
      <p>Relevant Coursework: Introduction to Programming, Electrical Circuits, Electromagnetics, Programming for Technologists</p>
    </section>

    <section class="section">
      <h1>TECHNICAL PROFICIENCIES</h1>
      <p><strong>Modeling Programs:</strong> ALGOR, eQUEST, and EnergyPro (LEED project with a VRF system)</p>
      <p><strong>Drafting Software:</strong> AutoCAD, AutoCAD LT</p>
    </section>

    <section class="section">
      <h1>RELEVANT EXPERIENCE</h1>
      <p><strong>American Pollution Control Corp.</strong> <span class="date-range">June 2023 - August 2023</span></p>
      <p><em>Environmental Engineering Intern</em> - Chalmette, LA</p>
      <ul class="list">
        <li>Inspected sites and performed detailed monitoring of industrial pollution control measures with an environmental engineer based on state and local regulations.</li>
        <li>Served on a committee dedicated to designing and implementing a new wastewater treatment system.</li>
        <li>Investigated environmental projects onsite with a team of 3 engineers.</li>
      </ul>

      <p><strong>Cargill</strong> <span class="date-range">May 2022 - August 2022</span></p>
      <p><em>Engineer Intern</em> - Breaux Bridge, LA</p>
      <ul class="list">
        <li>Researched building code items, materials, and similar building plans for 2 large commercial projects in New Orleans.</li>
        <li>Reviewed building plans with engineering and design teams to evaluate for ADA compliance.</li>
        <li>Collaborated with a team of 7 to research and identify suitable locations to install groundwater dams.</li>
      </ul>
    </section>

    <section class="section">
      <h1>RELEVANT PROJECT EXPERIENCE</h1>
      <p><strong>Group Project, Senior Design Course</strong> <span class="date-range">January - March 2023</span></p>
      <p>Hammond, LA</p>
      <ul class="list">
        <li>Collaborated with a 5-person team tasked with developing an action plan for addressing societal, environmental, regulatory, and economic constraints related to a local wastewater project.</li>
        <li>Researched client needs and developed a solutions-based layout to best suit functionality requirements.</li>
        <li>Served as project leader by organizing team meetings, tracking progress, and providing a forum for discussion.</li>
      </ul>
    </section>

    <section class="section">
      <h1>CAMPUS INVOLVEMENT</h1>
      <p><strong>Co-Captain, SLU Tennis Team</strong> <span class="date-range">August 2020 - May 2023</span></p>
      <p>Hammond, LA</p>
      <ul class="list">
        <li>Instrumental in team motivation, encouragement, and success.</li>
      </ul>

      <p><strong>Member, Beta Gamma Sigma, SLU</strong> <span class="date-range">December 2019 - December 2020</span></p>
      <p>Hammond, LA</p>
      <ul class="list">
        <li>International Honor Society.</li>
      </ul>
    </section>
  </div>
    `,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
      transformPastedHTML(html) {
        return html; // Preserve all HTML and classes when pasting
      },
      // parseOptions: {
      //   preserveWhitespace: 'full',
      // },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="min-h-screen text-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => window.history.back()}
            className="text-purple-400 hover:text-purple-300 flex items-center gap-2"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-semibold">
            Make Further Edits & Download
          </h1>
          <div className="w-[100px]"></div>
        </div>

        <div className=" rounded-lg p-2 mb-4">
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
              // onClick={() => editor.chain().focus().undo().run()}
              // disabled={!editor.can().undo()}
            >
              <Printer className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="flex gap-1">
                  <TypeIcon className="h-4 w-4" />{" "}
                  <ChevronDown className="h-1 w-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem
                  onClick={() =>
                    editor.chain().focus().setFontFamily("Inter").run()
                  }
                >
                  Inter
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .setFontFamily('"Comic Sans MS", "Comic Sans"')
                      .run()
                  }
                >
                  Comic Sans
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    editor.chain().focus().setFontFamily("serif").run()
                  }
                >
                  Serif
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    editor.chain().focus().setFontFamily("monospace").run()
                  }
                >
                  Monospace
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    editor.chain().focus().setFontFamily("cursive").run()
                  }
                >
                  Cursive
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .setFontFamily("var(--title-font-family)")
                      .run()
                  }
                >
                  CSS Variable
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    editor.chain().focus().setFontFamily('"Exo 2"').run()
                  }
                >
                  Exo 2
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => editor.chain().focus().unsetFontFamily().run()}
                >
                  Unset Font Family
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive("bold") ? "bg-white/10" : ""}
            >
              <BoldIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive("italic") ? "bg-white/10" : ""}
            >
              <ItalicIcon className="h-4 w-4" />
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
              <CodeIcon className="h-4 w-4" />
            </Button>
            <div className="w-[1px] h-6 bg-gray-600 mx-1" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              className={
                editor.isActive({ textAlign: "left" }) ? "bg-white/10" : ""
              }
            >
              <AlignLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
              className={
                editor.isActive({ textAlign: "center" }) ? "bg-white/10" : ""
              }
            >
              <AlignCenter className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              className={
                editor.isActive({ textAlign: "right" }) ? "bg-white/10" : ""
              }
            >
              <AlignRight className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                editor.chain().focus().setTextAlign("justify").run()
              }
              className={
                editor.isActive({ textAlign: "justify" }) ? "bg-white/10" : ""
              }
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
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={
                editor.isActive("heading", { level: 1 }) ? "bg-white/10" : ""
              }
            >
              <Heading1 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={
                editor.isActive("heading", { level: 2 }) ? "bg-white/10" : ""
              }
            >
              <Heading2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              className={
                editor.isActive("heading", { level: 3 }) ? "bg-white/10" : ""
              }
            >
              <Heading3 className="h-4 w-4" />
            </Button>
            <div className="w-[1px] h-6 bg-gray-600 mx-1" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={editor.isActive("blockquote") ? "bg-white/10" : ""}
            >
              <Quote className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={editor.isActive("codeBlock") ? "bg-white/10" : ""}
            >
              <Code2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                const url = window.prompt("Enter the image URL");
                if (url) {
                  editor.chain().focus().setImage({ src: url }).run();
                }
              }}
            >
              <ImageIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              className={editor.isActive("taskList") ? "bg-white/10" : ""}
            >
              <ListChecks className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8">
          <EditorContent editor={editor} className="min-h-[500px] text-black" />
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <Button variant="outline" className=" text-white border-gray-600">
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
