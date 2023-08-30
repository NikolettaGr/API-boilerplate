const API_KEY = "iFSipUVzlpvNoPfXiMdU6rYOgqI";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {

    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }
};

function displayStatus(data) {
    let titleElement = document.getElementById("resultsModalTitle");
    titleElement.innerText = "API Key Status";
    let bodyText = document.getElementById("results-content");
    bodyText.innerText = `Your key is valid until \n ${data.expiry}`;

    resultsModal.show();
}