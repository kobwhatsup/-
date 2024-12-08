import type { ManualChunksOption } from 'vite';

export const manualChunks: ManualChunksOption = {
  'editor': [
    '@tiptap/core',
    '@tiptap/starter-kit',
    '@tiptap/extension-color',
    '@tiptap/extension-font-family', 
    '@tiptap/extension-image',
    '@tiptap/extension-link',
    '@tiptap/extension-text-align',
    '@tiptap/extension-text-style',
    '@tiptap/extension-underline',
    '@tiptap/pm',
    'prosemirror-commands',
    'prosemirror-dropcursor',
    'prosemirror-gapcursor',
    'prosemirror-history',
    'prosemirror-keymap',
    'prosemirror-model',
    'prosemirror-schema-list',
    'prosemirror-state',
    'prosemirror-transform',
    'prosemirror-view'
  ]
};

export const optimizeDeps = {
  include: ['@tiptap/core', '@tiptap/starter-kit']
};

export const ssrConfig = {
  noExternal: ['@tiptap/*', 'prosemirror-*']
};