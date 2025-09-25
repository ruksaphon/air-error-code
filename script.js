document.addEventListener("DOMContentLoaded", function () {
  liff.init({ liffId: "YOUR_LIFF_ID" })
    .then(() => {
      console.log("LIFF initialized");
    })
    .catch(err => {
      console.error("LIFF init error", err);
    });
});

const errorDatabase = {
  Daikin: {
    "U4": "ปัญหาการสื่อสารระหว่างหน่วยใน",
    "A1": "ปัญหาแผงวงจรหลัก"
  },
  Mitsubishi: {
    "E6": "คอมเพรสเซอร์ไม่ทำงาน",
    "P8": "เซ็นเซอร์อุณหภูมิเสีย"
  },
  Panasonic: {
    "H11": "การสื่อสารผิดพลาด",
    "F90": "ปัญหาคอนโทรลบอร์ด"
  }
};

function searchError() {
  const brand = document.getElementById("brandSelect").value;
  const code = document.getElementById("errorCodeInput").value.toUpperCase().trim();
  const resultDiv = document.getElementById("result");

  if (!brand || !code) {
    resultDiv.innerText = "กรุณาเลือกแบรนด์และกรอกรหัส Error";
    return;
  }

  const description = errorDatabase[brand]?.[code];
  resultDiv.innerText = description ? `รายละเอียด: ${description}` : "ไม่พบข้อมูลรหัสนี้";
}
