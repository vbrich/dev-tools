
export async function codingQuestion(promptData) {
  // console.log('Prompt Data = ' + promptData);
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
  // console.log('Data = ' + data);
  return data;  
}
