export async function getData() {
  let response = await fetch(URL);
  let data = await response.json();

  return data;
}
