import React, { useState } from 'react';
import "./exp.css";
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey:"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",
});
delete configuration.baseOptions.headers['User-Agent'];
const openai = new OpenAIApi(configuration);
const textUp = "#include<iostream>/n using namespace std;/n int main()/n{/nint x=9,y=8;/ncout<<x+y;/n}/n";
function Explain() {
  const [explanation, setExplanation] = useState('');

  const explainCode = async () => {
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Explain this code :" + textUp,
        temperature: 0,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\"\"\""],
      });
      const exp = JSON.parse(response.request.response);
      setExplanation(exp.choices[0].text);
      console.log(explanation)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <textarea value={textUp} ></textarea>
      <br/>
      <button onClick={explainCode}>Explain Code</button>
      <p>{explanation}</p>
    </div>
  );
}

export default Explain;