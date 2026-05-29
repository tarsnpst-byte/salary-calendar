function calculateSalary() {
    const base = parseFloat(document.getElementById('baseSalary').value) || 0;
    const soc = parseFloat(document.getElementById('socialSecurity').value) || 0;
    const tax = parseFloat(document.getElementById('taxDeduction').value) || 0;
    
    // ตรงนี้คือจุดที่เคยหายไป: เราต้องดึงค่าจากรายการ 2-10 มารวมด้วย
    const otN = parseFloat(document.getElementById('showOtNormal').innerText.replace(/,/g, '')) || 0;
    const otW = parseFloat(document.getElementById('showOtWeekend').innerText.replace(/,/g, '')) || 0;
    const otH = parseFloat(document.getElementById('showOtHoliday').innerText.replace(/,/g, '')) || 0;
    const travel = parseFloat(document.getElementById('showTravel').innerText.replace(/,/g, '')) || 0;
    
    const lang = document.getElementById('hasLanguage').checked ? (parseFloat(document.getElementById('languageAllowance').value) || 0) : 0;
    const pos = parseFloat(document.getElementById('roleAllowance').value) || 0;
    const dil = parseFloat(document.getElementById('diligenceAllowance').value) || 0;
    const shift = parseFloat(document.getElementById('shiftAllowance').value) || 0;
    const other = parseFloat(document.getElementById('otherIncome').value) || 0;
    const lateDeduct = parseFloat(document.getElementById('showAutoLate').innerText.replace(/,/g, '')) || 0;

    const total = (base + otN + otW + otH + travel + lang + pos + dil + shift + other) - soc - tax - lateDeduct;
    document.getElementById('totalEarnings').innerText = total.toLocaleString(undefined, {minimumFractionDigits: 2}) + " ฿";
}