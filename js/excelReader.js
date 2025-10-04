console.log("excelReader.js loaded");

window.readExcelFileFromInput = async function (elementId) {
    try {
        console.log("readExcelFileFromInput called with elementId:", elementId);
        const input = document.getElementById(elementId);
        if (!input || !input.files || input.files.length === 0) {
            console.error("No file selected or input element not found");
            return null;
        }
        const file = input.files[0];
        const arrayBuffer = await file.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
        return jsonData;
    } catch (error) {
        console.error('Error reading Excel file:', error);
        return null;
    }
};

console.log("readExcelFileFromInput defined:", typeof window.readExcelFileFromInput);