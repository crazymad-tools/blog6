import React from "react";

const renderer = new marked.Renderer();

console.log(hljs);

marked.setOptions({
  highlight: function (code: string, lang: string) {
    return hljs.highlightAuto(code, [lang]).value;
  },
  langPrefix: "hljs lang-",
});

renderer.link = function (href: string, title: string, text: string) {
  return `<a target="_blank" href="${href}" title="${title}">${text}</a>`;
};

interface Props {
  content: string;
}

const Markdown: React.FC<Props> = (props) => {
  return (
    <div
      className="markdown-review"
      dangerouslySetInnerHTML={{
        __html: marked(props.content, { renderer: renderer }),
      }}
    />
  );
};

export default Markdown;
