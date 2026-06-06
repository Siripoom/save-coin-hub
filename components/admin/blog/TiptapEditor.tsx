'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
  Bold, Italic, Heading2, Heading3,
  List, ListOrdered, Quote, Code, Minus
} from 'lucide-react'

interface TiptapEditorProps {
  content: string
  onChange: (html: string) => void
}

export default function TiptapEditor({ content, onChange }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    immediatelyRender: false,
    onUpdate({ editor }) {
      onChange(editor.getHTML())
    },
  })

  if (!editor) return null

  const tools = [
    {
      label: 'Bold',
      icon: Bold,
      action: () => editor.chain().focus().toggleBold().run(),
      active: editor.isActive('bold'),
    },
    {
      label: 'Italic',
      icon: Italic,
      action: () => editor.chain().focus().toggleItalic().run(),
      active: editor.isActive('italic'),
    },
    null, // divider
    {
      label: 'H2',
      icon: Heading2,
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      active: editor.isActive('heading', { level: 2 }),
    },
    {
      label: 'H3',
      icon: Heading3,
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      active: editor.isActive('heading', { level: 3 }),
    },
    null,
    {
      label: 'Bullet List',
      icon: List,
      action: () => editor.chain().focus().toggleBulletList().run(),
      active: editor.isActive('bulletList'),
    },
    {
      label: 'Ordered List',
      icon: ListOrdered,
      action: () => editor.chain().focus().toggleOrderedList().run(),
      active: editor.isActive('orderedList'),
    },
    null,
    {
      label: 'Blockquote',
      icon: Quote,
      action: () => editor.chain().focus().toggleBlockquote().run(),
      active: editor.isActive('blockquote'),
    },
    {
      label: 'Code',
      icon: Code,
      action: () => editor.chain().focus().toggleCode().run(),
      active: editor.isActive('code'),
    },
    {
      label: 'Divider',
      icon: Minus,
      action: () => editor.chain().focus().setHorizontalRule().run(),
      active: false,
    },
  ]

  return (
    <div className="admin-tiptap-wrap">
      <div className="admin-tiptap-toolbar">
        {tools.map((tool, i) =>
          tool === null ? (
            <div key={i} className="admin-tiptap-divider" />
          ) : (
            <button
              key={tool.label}
              type="button"
              title={tool.label}
              className={`admin-tiptap-btn ${tool.active ? 'is-active' : ''}`}
              onClick={tool.action}
            >
              <tool.icon size={14} />
            </button>
          )
        )}
      </div>
      <EditorContent editor={editor} className="admin-tiptap-content" />
    </div>
  )
}
