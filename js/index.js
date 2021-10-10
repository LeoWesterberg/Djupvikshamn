import { getData } from "./getData.js";

getData().then((data) => {
    var container = document.querySelector("#temp");
    container.innerHTML = data + " °C"
});