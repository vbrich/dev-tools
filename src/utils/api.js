export async function getData() {
  const response = await fetch("https://httpbin.org/get");
  const data = await response.json();
  console.log('data = ' + data);
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
  console.log('bottom data = ' + data);

  return data;
}
