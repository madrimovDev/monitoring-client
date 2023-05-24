import React, { type ReactElement} from 'react';

interface DeltaOp {
  insert?: string;
  attributes?: {
    header?: number;
    list?: 'ordered' | 'bullet';
    blockquote?: boolean;
    code?: boolean;
    script?: 'sub' | 'super';
    indent?: number;
    color?: string[];
    background?: string[];
    font?: string;
    align?: string[];
  };
}

interface Delta {
  ops: DeltaOp[];
}

export function convertDeltaToHTML(delta: Delta): ReactElement {
  const ops = delta.ops;
  const elements: ReactElement[] = [];

  ops.forEach((op, index) => {
    if (op.insert != null) {
      if (op.attributes != null) {
        const attributes = op.attributes;

        if (attributes.header != null) {
          // Handle header operations
          const headerLevel = attributes.header;
          elements.push(React.createElement(`h${headerLevel}`, {key: index}, op.insert));
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        } else if (attributes.list) {
          // Handle list operations
          const listType = attributes.list;
          elements.push(
            React.createElement(
              listType === 'ordered' ? 'ol' : 'ul',
              {key: index},
              React.createElement('li', null, op.insert),
            ),
          );
        } else if (attributes.blockquote ?? false) {
          // Handle blockquote operations
          elements.push(React.createElement('blockquote', {key: index}, op.insert));
        } else if (attributes.code ?? false) {
          // Handle code-block operations
          elements.push(React.createElement('pre', {key: index}, op.insert));
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        } else if (attributes.script) {
          // Handle script (sub/super) operations
          const scriptType = attributes.script;
          elements.push(React.createElement(scriptType === 'sub' ? 'sub' : 'sup', {key: index}, op.insert));
        } else if (attributes.indent != null) {
          // Handle indent operations
          const indentLevel = attributes.indent;
          elements.push(
            React.createElement('div', {style: {marginLeft: `${indentLevel * 30}px`}, key: index}, op.insert),
          );
        } else if (attributes.color != null) {
          // Handle color operations
          const colorValue = attributes.color;
          elements.push(React.createElement('span', {style: {color: colorValue}, key: index}, op.insert));
        } else if (attributes.background != null) {
          // Handle background operations
          const backgroundColor = attributes.background;
          elements.push(React.createElement('span', {style: {backgroundColor}, key: index}, op.insert));
        } else if (attributes.font != null) {
          // Handle font operations
          const fontValue = attributes.font;
          elements.push(React.createElement('span', {style: {fontFamily: fontValue}, key: index}, op.insert));
        } else if (attributes.align != null) {
          // Handle alignment operations
          const alignment = attributes.align;
          elements.push(React.createElement('div', {style: {textAlign: alignment}, key: index}, op.insert));
        }
      } else {
        // Handle insert operations without attributes
        elements.push(React.createElement('p', {key: index}, op.insert));
      }
    }
  });

  return <div>{elements}</div>;
}

