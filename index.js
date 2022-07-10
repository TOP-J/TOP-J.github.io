function appendItem() {
   const item = document.getElementById("new").value;
   const element = document.createElement("p");
    element.appendChild(item);
    const section = document.getElementById("section");
    section.appendChild(element);

}
document.querySelector("button").addEventListener("click", appendItem());
