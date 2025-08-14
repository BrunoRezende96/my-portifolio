import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function HeroTypewriter() {
  const codeString = `const me = {
  name: "Bruno Rezende de Oliveira",
  areaOfExpertise: "Full Stack Developer",
  greet: function() {
    console.log("Welcome to my portfolio");
  }
}`

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < codeString.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + codeString[index]);
        setIndex((prev) => prev + 1);
      }, 80); // Velocidade de digitação
      return () => clearTimeout(timeout);
    }
  }, [index, codeString]);

  return (
    <Box
      sx={{
        backgroundColor: "#0a0a16",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 255, 157, 0.4)",
        width: "fit-content",
        margin: "auto",
      }}
    >
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        customStyle={{
          background: "transparent",
          fontSize: "1rem",
          padding: 0,
        }}
      >
        {displayedText}
      </SyntaxHighlighter>

      {/* Cursor piscando */}
      <Box
        component="span"
        sx={{
          display: "inline-block",
          width: "8px",
          backgroundColor: "#fff",
          marginLeft: "2px",
          animation: "blink 0.8s infinite",
          "@keyframes blink": {
            "0%, 50%": { opacity: 1 },
            "51%, 100%": { opacity: 0 }
          }
        }}
      />
    </Box>
  );
}
