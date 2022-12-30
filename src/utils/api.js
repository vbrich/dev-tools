// import { Configuration, OpenAIApi } from 'openai'

export async function getData() {
  const response = await fetch("https://httpbin.org/get");
  const data = await response.json();  
  return data;
}

export async function postData(mydata) {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    body: JSON.stringify(mydata),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

export async function codingQuestion(promptData) {
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
  return data;  
}
