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
        return convertToHexColorCodes(responseData.result);
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}

function rgbToHex(r, g, b) {
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function convertToHexColorCodes(rgbArray) {
    const hexColorCodes = rgbArray.map(rgb => rgbToHex(...rgb));
    return hexColorCodes;
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