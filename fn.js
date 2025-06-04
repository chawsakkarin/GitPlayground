// ฟังก์ชันสำหรับคำนวณพื้นฐาน
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "ไม่สามารถหารด้วย 0 ได้";
  }
  return a / b;
}

// ฟังก์ชันสำหรับจัดการข้อความ
function capitalizeFirst(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function removeSpaces(str) {
  return str.replace(/\s/g, "");
}

// ฟังก์ชันสำหรับจัดการอาร์เรย์
function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

function calculateAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

// ฟังก์ชันตรวจสอบเงื่อนไข
function isEven(num) {
  return num % 2 === 0;
}

function isPositive(num) {
  return num > 0;
}

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

// ฟังก์ชันสร้างข้อมูล
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCurrentDate() {
  return new Date().toLocaleDateString("th-TH");
}

function createGreeting(name) {
  return `สวัสดี ${name}! ยินดีต้อนรับ`;
}

// ตัวอย่างการใช้งาน
console.log("=== ตัวอย่างการใช้งาน ===");
console.log("การบวก:", add(5, 3));
console.log("ตัวอักษรแรกเป็นตัวใหญ่:", capitalizeFirst("hello world"));
console.log("หาค่าสูงสุด:", findMax([1, 5, 3, 9, 2]));
console.log("ตรวจสอบเลขคู่:", isEven(4));
console.log("สุ่มตัวเลข 1-10:", generateRandomNumber(1, 10));
console.log("วันที่ปัจจุบัน:", getCurrentDate());
console.log("คำทักทาย:", createGreeting("สมชาย"));

// Export ฟังก์ชันสำหรับใช้ใน Node.js (ถ้าต้องการ)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    capitalizeFirst,
    reverseString,
    removeSpaces,
    findMax,
    findMin,
    calculateAverage,
    isEven,
    isPositive,
    isPalindrome,
    generateRandomNumber,
    getCurrentDate,
    createGreeting,
  };
}
