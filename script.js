
document.addEventListener("DOMContentLoaded", function () {
    const brandSelect = document.getElementById("brandSelect");
    const typeSelect = document.getElementById("typeSelect");
    const errorInput = document.getElementById("errorInput");
    const searchButton = document.getElementById("searchButton");
    const errorTableBody = document.querySelector("#errorTable tbody");

    // Populate brand dropdown
    for (const brand in errorDatabase) {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    }

    // Update type dropdown when brand changes
    brandSelect.addEventListener("change", function () {
        typeSelect.innerHTML = '<option value="">-- เลือกประเภท --</option>';
        const selectedBrand = brandSelect.value;
        if (selectedBrand && errorDatabase[selectedBrand]) {
            for (const type in errorDatabase[selectedBrand]) {
                const option = document.createElement("option");
                option.value = type;
                option.textContent = type;
                typeSelect.appendChild(option);
            }
        }
        clearTable();
    });

    // Search button click handler
    searchButton.addEventListener("click", function () {
        const brand = brandSelect.value;
        const type = typeSelect.value;
        const errorCode = errorInput.value.trim().toUpperCase();

        clearTable();

        if (!brand || !type || !errorCode) {
            alert("กรุณาเลือกแบรนด์ ประเภท และกรอก Error Code");
            return;
        }

        const models = errorDatabase[brand]?.[type];
        if (!models) return;

        for (const model in models) {
            const errors = models[model];
            for (const code in errors) {
                if (code.toUpperCase() === errorCode) {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${model}</td>
                        <td>${code}</td>
                        <td>${errors[code]}</td>
                    `;
                    errorTableBody.appendChild(row);
                }
            }
        }
    });

    function clearTable() {
        errorTableBody.innerHTML = "";
    }
});
