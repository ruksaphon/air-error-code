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
    Wall: {
      "U4": "ปัญหาการสื่อสารระหว่างหน่วยใน (Wall Type)",
      "A1": "ปัญหาแผงวงจรหลัก (Wall Type)"
    },
    Ceiling: {
      "U4": "ปัญหาการสื่อสารระหว่างหน่วยใน (Ceiling Type)"
    }
  },
  Mitsubishi: {
    Wall: {
      "E6": "คอมเพรสเซอร์ไม่ทำงาน (Wall Type)",
      "P8": "เซ็นเซอร์อุณหภูมิเสีย (Wall Type)"
    },
    Ceiling: {
      "E6": "คอมเพรสเซอร์ไม่ทำงาน (Ceiling Type)"
    }
  },
  Panasonic: {
    Wall: {
      "H11": "การสื่อสารผิดพลาด (Wall Type)",
      "F90": "ปัญหาคอนโทรลบอร์ด (Wall Type)"
    },
    Ceiling: {
      "H11": "การสื่อสารผิดพลาด (Ceiling Type)"
    }
  }
};

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
