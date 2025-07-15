import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-python";

interface CodeBlockProps {
  language: string;
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
  useEffect(() => {
    Prism.highlightAllUnder(
      document.querySelector(`.language-${language}`) || document,
      false
    );
  }, [language, children]);

  return (
    <pre className={`language-${language}`} tabIndex={0}>
      <code className={`language-${language}`}>{children.trim()}</code>
    </pre>
  );
};

export default CodeBlock;
