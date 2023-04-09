import React, { useState } from 'react';
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey:"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",
});
delete configuration.baseOptions.headers['User-Agent'];
const openai = new OpenAIApi(configuration);
// const openai = new OpenAI("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");
const textUp = "asdf";
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
      <button onClick={explainCode}>Explain Code</button>
      <p>{explanation}</p>
    </div>
  );
}

export default Explain;