import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import Title from "./components/Title";
import Options from "./components/Options";
import Output from "./components/Output";

import "./App.css";
const App = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [tag, setTag] = useState("p");
  const [inputValue, setInputValue] = useState(1);
  const [includeHTML, setIncludeHTML] = useState("Yes");
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setParagraphs(data));
  }, [inputValue]);

  return (
    <>
      <Container>
        <Title />
        <Options
          paragraphs={paragraphs}
          copiedCode={copiedCode}
          includeHTML={includeHTML}
          setCopiedCode={setCopiedCode}
          setIncludeHTML={setIncludeHTML}
          setInputValue={setInputValue}
          tag={tag}
          setTag={setTag}
        />
        <Output paragraphs={paragraphs} includeHTML={includeHTML} tag={tag} />
      </Container>
    </>
  );
};

export default App;
