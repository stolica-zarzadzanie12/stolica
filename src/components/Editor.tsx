import React, { useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface EditorProps {
  value: string;
  onChange: (content: string) => void;
  className?: string;
}

const Editor = ({ value, onChange, className = 'h-64 mb-12' }: EditorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeEditor = () => {
      const container = containerRef.current;
      if (!container) return;

      const toolbar = container.querySelector('.ql-toolbar');
      const editor = container.querySelector('.ql-editor');
      
      if (toolbar && editor) {
        const containerHeight = container.clientHeight;
        const toolbarHeight = toolbar.clientHeight;
        const editorHeight = containerHeight - toolbarHeight;
        
        (editor as HTMLElement).style.height = `${editorHeight}px`;
        (editor as HTMLElement).style.minHeight = `${editorHeight}px`;
      }
    };

    resizeEditor();
    window.addEventListener('resize', resizeEditor);

    return () => {
      window.removeEventListener('resize', resizeEditor);
    };
  }, []);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'blockquote', 'code-block'],
      [{ align: [] }],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'link', 'blockquote', 'code-block',
    'align',
  ];

  return (
    <div className={className}>
      <div ref={containerRef} className="h-full flex flex-col">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          className="flex-1 flex flex-col"
          preserveWhitespace
        />
      </div>
    </div>
  );
};

export default Editor;