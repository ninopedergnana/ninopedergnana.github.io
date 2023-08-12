const url = "http://colormind.io/api/";
const data = {
    model: "default",
};
let output = [];

async function fetchData() {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        output = convertToHexColorCodes(responseData.result);
        console.log(output); // Output within this module
        return output;
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

export { fetchData };
