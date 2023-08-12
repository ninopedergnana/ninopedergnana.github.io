const url = "https://www.thecolorapi.com/scheme?hex=FF0&mode=monochrome&count=5";

const button = document.getElementById('button');

async function fetchData() {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log(responseData)
    return responseData;
  } catch (error) {
    console.error("Fetch Error:", error);
  }
}

button.addEventListener('click', () => {
  fetchData().then(colors => {
    if (colors) {
      document.body.style.setProperty('--first-color', colors.colors[0].hex.value);
      document.body.style.setProperty('--second-color', colors.colors[1].hex.value);
      document.body.style.setProperty('--third-color', colors.colors[2].hex.value);
      document.body.style.setProperty('--fourth-color', colors.colors[3].hex.value);
      document.body.style.setProperty('--fifth-color', colors.colors[4].hex.value);
    }
  })
});
