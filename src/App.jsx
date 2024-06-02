import { useState } from "react";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";

function App() {
  // use states
  const [html_edit, setHtmlEdit] = useState("");
  const [css_edit, setCssEdit] = useState("");
  const [js_edit, setJsEdit] = useState("");

  // HTML handler

  const onChangeHtml = useCallback((value) => {
    console.log(value);
    setHtmlEdit(value);
  }, []);

  // CSS handler

  const onChangeCss = useCallback((value) => {
    console.log(value);
    setCssEdit(value);
  }, []);

  // JavaScript handler
  const onChangeJavaScript = useCallback((value) => {
    console.log(value);
    setJsEdit(value);
  }, []);

  const srcCode = `
  <html>
  <body> ${html_edit}</body>
  <style> ${css_edit}</style>
  <script>${js_edit}</script>
  </html>
  `;
  return (
    <div>
      <Navbar />

      {/* Components */}
      <div className="p-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="bg-[#282c34] rounded-sm shadow">
            <h2 className="text-lg font-semibold mb-1 pl-2 text-white">HTML</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={html_edit}
              height="318px"
              theme="dark"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
          </div>
          <div className="bg-[#282c34] rounded-sm shadow">
            <h2 className="text-lg font-semibold mb-1 pl-2 text-white">CSS</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={css_edit}
              height="318px"
              theme="dark"
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
          </div>
          <div className="bg-[#282c34] rounded-sm shadow">
            <h2 className="text-lg font-semibold mb-1 pl-2 text-white">
              Javascript
            </h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={js_edit}
              height="318px"
              theme="dark"
              extensions={[javascript(true)]}
              onChange={onChangeJavaScript}
            />
          </div>
        </div>
        <Result srcCode={srcCode} />
      </div>
    </div>
  );
}

export default App;
