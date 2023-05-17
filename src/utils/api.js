// import { Configuration, OpenAIApi } from "openai";

// TODO: Just have a test replit express server calling openai with no validation, etc
export async function codingQuestion(promptData) {
  // promptData = promptData + " and surround any code returned with triple backticks";
  console.log('Prompt Data = ' + promptData);
  const response = await fetch("https://openai.ribo916.repl.co/", {
    method: "POST",    
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: promptData
    })  
  });
  const data = await response.json();
  console.log('Data = ' + JSON.stringify(data));
  return data;  
}

// TODO: Really needs to be called from a backend, as our API key can get snagged. Just a free key at the moment, so fine checking into github until I move this code to a backend
/*
export async function renderImage(promptData) {
  // console.log('PromptValue = ' + promptData);
  const configuration = new Configuration({
    apiKey: "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"
  });
  const openai = new OpenAIApi(configuration);
  const res = await openai.createImage({
    prompt: promptData,
    n: 1,
    size: "1024x1024",
    response_format: "url"
  });
  // console.log('Data = ' + JSON.stringify(res));
  return (res.data.data[0].url); 
}
*/

// TODO: Just have a test replit express server calling openai with no validation, etc
export async function renderImage(promptData) {
  console.log('Prompt Data = ' + promptData);
  const response = await fetch("https://openai.ribo916.repl.co/image", {
    method: "POST",    
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: promptData
    })  
  });
  const data = await response.text(); //json();
  console.log('Data = ' + data);
  return data;  
}