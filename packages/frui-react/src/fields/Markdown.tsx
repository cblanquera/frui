//types
import type { MarkdownProps } from 'frui-core/dist/types/fields';
//react
import React from 'react';
//using react-dom/server to render markdown... on the client side
import { renderToStaticMarkup } from 'react-dom/server';
//hooks
import useMarkdown from 'frui-core/dist/hooks/useMarkdown';
//components
import MarkdownFrame from 'markdown-to-jsx';
import Textarea from './Textarea';
import Button from '../Button';

/**
 * Form Markdown Component (Main)
 */
const Markdown: React.FC<MarkdownProps> = (props) => {
  const {
    onUpdate,
    defaultValue,
    rows = 9,
    ...attributes
  } = props;
  //hooks
  const { value, mode, handlers } = useMarkdown({ 
    onUpdate, 
    defaultValue: defaultValue as string|undefined
  });

  const previewStyles = {
    display: mode === 'preview' ? 'block' : 'none',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: 'black',
    paddingBottom: '8px',
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop: '8px',
    width: '100%'
  }

  const markdown = renderToStaticMarkup(<MarkdownFrame children={value} />);

  return (
    <div>
      <div style={{ textAlign: 'right' }}>
        <Button muted={mode === 'edit'} onClick={() => handlers.mode('edit')} style={{ fontSize: '18px' }}>✎</Button>
        <Button muted={mode === 'preview'} onClick={() => handlers.mode('preview')} style={{ fontSize: '18px' }}>⚎</Button>
      </div>
      <div style={{ display: mode === 'edit' ? 'block' : 'none'}}>
        <Textarea {...attributes} rows={rows} defaultValue={defaultValue} onUpdate={handlers.update} />
      </div>
      <iframe style={previewStyles} srcDoc={markdown} />
    </div>
  );
};

export default Markdown;