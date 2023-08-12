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
        return responseData.result;
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}

button.addEventListener('click', () => {
    fetchData().then(colors => {
        console.log('Colors fetched:', colors);
        if (false) {
            document.body.style.setProperty('--first-color', colors[0]);
            document.body.style.setProperty('--second-color', colors[1]);
            document.body.style.setProperty('--third-color', colors[2]);
            document.body.style.setProperty('--fourth-color', colors[3]);
            document.body.style.setProperty('--fifth-color', colors[4]);
        }
    });
});