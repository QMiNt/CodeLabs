import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import { javascriptGenerator } from "blockly/javascript";
import { pythonGenerator } from "blockly/python";
import { dartGenerator } from "blockly/dart";

const Build = () => {
  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");
  const [pythonCode, setPythonCode] = useState("");
  const [dartCode, setDartCode] = useState("");

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Logic",
        colour: "#5C81A6",
        contents: [
          {
            kind: "block",
            type: "controls_if",
          },
          {
            kind: "block",
            type: "logic_compare",
          },
          {
            kind: "block",
            type: "logic_operation",
          },
          {
            kind: "block",
            type: "logic_negate",
          },
          {
            kind: "block",
            type: "logic_boolean",
          },
        ],
      },
      {
        kind: "category",
        name: "Loops",
        categorystyle: "loop_category",
        contents: [
          {
            kind: "block",
            type: "controls_repeat_ext",
            inputs: {
              TIMES: {
                block: {
                  type: "math_number",
                  fields: {
                    NUM: 10,
                  },
                },
              },
            },
          },
          {
            kind: "block",
            type: "controls_whileUntil",
          },
          {
            kind: "block",
            type: "controls_flow_statements",
          },
        ],
      },
      {
        kind: "category",
        name: "Math",
        categorystyle: "math_category",
        contents: [
          {
            kind: "block",
            type: "math_number",
            fields: {
              NUM: 123,
            },
          },
          {
            kind: "block",
            type: "math_single",
            inputs: {
              NUM: {
                shadow: {
                  type: "math_number",
                  fields: {
                    NUM: 9,
                  },
                },
              },
            },
          },
          {
            kind: "block",
            type: "math_number_property",
            inputs: {
              NUMBER_TO_CHECK: {
                shadow: {
                  type: "math_number",
                  fields: {
                    NUM: 0,
                  },
                },
              },
            },
          },
          {
            kind: "block",
            type: "math_arithmetic",
            inputs: {
              A: {
                shadow: {
                  type: "math_number",
                  fields: {
                    NUM: 1,
                  },
                },
              },
              B: {
                shadow: {
                  type: "math_number",
                  fields: {
                    NUM: 1,
                  },
                },
              },
            },
          },
        ],
      },
      {
        kind: "category",
        name: "Text",
        categorystyle: "text_category",
        contents: [
          {
            kind: "block",
            type: "text",
          },
          {
            kind: "block",
            type: "text_length",
          },
          {
            kind: "block",
            type: "text_print",
          },
          {
            kind: "label",
            text: "Input/Output:",
            "web-class": "ioLabel",
          },
          {
            kind: "block",
            type: "text_print",
            inputs: {
              TEXT: {
                shadow: {
                  type: "text",
                  fields: {
                    TEXT: "abc",
                  },
                },
              },
            },
          },
          {
            kind: "block",
            type: "text_prompt_ext",
            inputs: {
              TEXT: {
                shadow: {
                  type: "text",
                  fields: {
                    TEXT: "abc",
                  },
                },
              },
            },
          },
        ],
      },
      {
        kind: "sep",
      },
      {
        kind: "category",
        name: "Variables",
        categorystyle: "variable_category",
        custom: "VARIABLE",
      },
      {
        kind: "category",
        name: "Functions",
        categorystyle: "procedure_category",
        custom: "PROCEDURE",
      },
    ],
  };
  function workspaceDidChange(workspace) {
    const jscode = javascriptGenerator.workspaceToCode(workspace);
    const pycode = pythonGenerator.workspaceToCode(workspace);
    const dartcode = dartGenerator.workspaceToCode(workspace);
    setJavascriptCode(jscode);
    setPythonCode(pycode);
    setDartCode(dartcode);
  }

  return (
    <div className="blockly-container">
      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        initialXml={initialXml}
        className="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: "#ccc",
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />
      {/* <pre id="generated-xml">{xml}</pre> */}
      <div className="lang-container">
        <h6>JavaScript</h6>
        <textarea
          className="form-control"
          id="code"
          style={{ height: "200px", width: "400px" }}
          value={javascriptCode}
          readOnly
        ></textarea>
        <h6>Python</h6>
        <textarea
          className="form-control"
          id="code"
          style={{ height: "200px", width: "400px" }}
          value={pythonCode}
          readOnly
        ></textarea>
        <h6>Dart</h6>
        <textarea
          id="code"
          className="form-control"
          style={{ height: "200px", width: "400px" }}
          value={dartCode}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default Build;
