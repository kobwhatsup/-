export interface EditorCommand {
  name: string;
  icon: string;
  title: string;
  action: (editor: any) => void;
}

export interface EditorContent {
  text: string;
  html: string;
}