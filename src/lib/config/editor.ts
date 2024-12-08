import type { EditorCommand } from '../types/editor';

export const editorCommands: EditorCommand[] = [
  {
    name: 'bold',
    icon: 'B',
    title: '加粗',
    action: (editor) => editor.chain().focus().toggleBold().run()
  },
  {
    name: 'italic',
    icon: 'I',
    title: '斜体',
    action: (editor) => editor.chain().focus().toggleItalic().run()
  },
  {
    name: 'underline',
    icon: 'U',
    title: '下划线',
    action: (editor) => editor.chain().focus().toggleUnderline().run()
  },
  {
    name: 'bulletList',
    icon: '•',
    title: '无序列表',
    action: (editor) => editor.chain().focus().toggleBulletList().run()
  },
  {
    name: 'orderedList',
    icon: '1.',
    title: '有序列表',
    action: (editor) => editor.chain().focus().toggleOrderedList().run()
  },
  {
    name: 'link',
    icon: '🔗',
    title: '链接',
    action: (editor) => {
      const url = prompt('请输入链接地址:');
      if (url) {
        editor.chain().focus().setLink({ href: url }).run();
      }
    }
  },
  {
    name: 'image',
    icon: '📷',
    title: '图片',
    action: () => {
      document.getElementById('image-upload')?.click();
    }
  }
];