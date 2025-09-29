document.addEventListener("DOMContentLoaded", function () {
  liff.init({ liffId: "YOUR_LIFF_ID" })
    .then(() => {
      console.log("LIFF initialized");
    })
    .catch(err => {
      console.error("LIFF init error", err);
    });
});

function searchError() {
  const brand = document.getElementById("brandSelect").value;
  const type = document.getElementById("typeSelect").value;
  const code = document.getElementById("errorCodeInput").value.toUpperCase().trim();
  const resultDiv = document.getElementById("result");

  if (!brand || !type || !code) {
    resultDiv.innerText = "กรุณาเลือกแบรนด์ ประเภท และกรอกรหัส Error";
    return;
  }

  const description = errorDatabase[brand]?.[type]?.[code];
  resultDiv.innerText = description ? `รายละเอียด: ${description}` : "ไม่พบข้อมูลรหัสนี้";
}
