import React, { useMemo, useState } from "react";
import { Row, Col } from "react-grid-system";
import { CssEditor } from "./components/CssEditor.component";
import { HtmlEditor } from "./components/HtmlEditor.component";
import { JsEditor } from "./components/JsEditor.component";
import { Preview } from "./components/Preview.component";

import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const srcDoc = useMemo(() => {
    if (!html && !css && !setJs) return false;
    return `<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
	      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<style>
	${css}
	</style>
</head>
<body>
	${html}
	<script>
    ${js}
	</script>
</body>
</html>`;
  }, [html, css, js]);

  return (
    <div className="App">
      <Row>
        <SplitterLayout
          primaryIndex={0}
          primaryMinSize={400}
          secondaryMinSize={100}
        >
          <Col className="editors">
            <Row className="editor__container">
              <HtmlEditor setHtml={setHtml} />
            </Row>
            <Row className="editor__container">
              <CssEditor setCss={setCss} />
            </Row>
            <Row className="editor__container">
              <JsEditor setJs={setJs} />
            </Row>
          </Col>
          <Col
            style={{ height: window.innerHeight - 16 + "px" }}
            className="preview__container"
          >
            <Preview srcDoc={srcDoc} />
          </Col>
        </SplitterLayout>
      </Row>
    </div>
  );
}

export default App;
