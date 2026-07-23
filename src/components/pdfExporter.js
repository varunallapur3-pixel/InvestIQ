// PDF and CSV export utilities for calculation projections

export function exportToCSV(filename, headers, rows) {
  let csvContent = "data:text/csv;charset=utf-8," 
    + headers.join(",") + "\n"
    + rows.map(e => e.join(",")).join("\n");
    
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${filename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function generatePDFReport(title, summaryMetrics, yearData) {
  if (window.jspdf && window.jspdf.jsPDF) {
    const doc = new window.jspdf.jsPDF();
    
    // Header
    doc.setFillColor(12, 19, 36);
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setTextColor(78, 222, 163);
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("InvestIQ Wealth Report", 14, 22);

    doc.setTextColor(187, 202, 191);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 30);
    
    // Title
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(title, 14, 52);

    // Metrics Box
    let yPos = 62;
    summaryMetrics.forEach(m => {
      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");
      doc.text(`${m.label}:`, 14, yPos);
      doc.setFont("helvetica", "bold");
      doc.text(`${m.value}`, 80, yPos);
      yPos += 8;
    });

    // Table Header
    yPos += 10;
    doc.setFillColor(25, 31, 49);
    doc.rect(14, yPos, 180, 10, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text("Year", 18, yPos + 7);
    doc.text("Invested Capital", 55, yPos + 7);
    doc.text("Estimated Returns", 105, yPos + 7);
    doc.text("Total Maturity", 155, yPos + 7);

    // Rows
    yPos += 10;
    doc.setTextColor(40, 40, 40);
    yearData.slice(0, 20).forEach((row, idx) => {
      if (idx % 2 === 0) {
        doc.setFillColor(245, 247, 250);
        doc.rect(14, yPos, 180, 8, 'F');
      }
      doc.setFont("helvetica", "normal");
      doc.text(String(row.year), 18, yPos + 6);
      doc.text(String(row.invested), 55, yPos + 6);
      doc.text(String(row.returns), 105, yPos + 6);
      doc.setFont("helvetica", "bold");
      doc.text(String(row.total), 155, yPos + 6);
      yPos += 8;
    });

    // Footer
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(120, 120, 120);
    doc.text("InvestIQ Precision Wealth Engine - Confidential & Audited Projections", 14, 285);

    doc.save(`${title.replace(/\s+/g, '_')}_InvestIQ_Report.pdf`);
  } else {
    // Fallback Print
    window.print();
  }
}
