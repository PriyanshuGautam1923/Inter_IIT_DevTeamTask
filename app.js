// Listen for `keyup` event
const body = document.getElementsByTagName("body")[0];
const input = document.querySelector("input");
const options = document.querySelector(".options");

let timer; // Timer identifier
const waitTime = 500; // Wait time in milliseconds

input.addEventListener("keyup", (e) => {
  const text = e.currentTarget.value;

  // Clear timer
  clearTimeout(timer);

  // Wait for X ms and then process the request
  timer = setTimeout(async () => {
    await call(text);
  }, waitTime);
});
const call = async function (text) {
  options.innerHTML = "";
  const payload = { text: text };
  console.log(payload);
  const configure = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };
  console.log(configure);
  if (!text) return;
  console.log(typeof text);
  const response = await fetch("http://localhost:8080/1", configure);
  const { hits } = await response.json();
  // console.log(data);
  options.innerHTML = "";
  hits.forEach((e) => {
    options.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="option">
      ${e.url}
    </div>`
    );
  });
};
