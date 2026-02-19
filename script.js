let label = document.getElementById("px");
let range = document.getElementById("border_width");
function RefreshPX() {
    label.innerText = range.value + " px";
}
function Torles() {
    document.getElementById("container").innerHTML = "";
}
function AddTable() {
    let table = document.createElement("table");

    let sorok = Number(document.getElementById("rows").value);
    let oszlopok = Number(document.getElementById("columns").value);
    let borderSzel = range.value;
    let collapse = document.getElementById("collapse").checked;
    let kiemel = document.getElementById("highlight").checked;
    for (let i = 0; i < sorok; i++) {
        let tr = document.createElement("tr");

        for (let c = 0; c < oszlopok; c++) {

            let cella = (kiemel && (i === 0 || c === 0))
                ? document.createElement("th")
                : document.createElement("td");

            cella.style.border = borderSzel + "px solid black";
            cella.innerText = Math.round(Math.random() * 9000 + 1000);

            tr.appendChild(cella);
        }
        table.appendChild(tr);
    }
    if (collapse) {
        table.style.borderCollapse = "collapse";
    }

    let container = document.getElementById("container");
    container.appendChild(table);
    container.appendChild(document.createElement("hr"));
}
