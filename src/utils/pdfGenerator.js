import { jsPDF } from "jspdf";
import "jspdf-autotable";


export const generatePDFUtil = (records) => {
    const columnR = ["Date", "Client Name  ", "Product ", "Price($)", "Qnty ", "Sale($) ", "Purchase($)", "Cash($)", "Credit($)"];
    const recordRows = [];
    records.forEach((record) => {
        let data = [
            record.date,
            record.person,
            record.product_name,
            record.price,
            record.quantity,
            record.sell === "sell" ? record.price * record.quantity : "0.0",
            record.sell === "purchase" ? record.price * record.quantity : "00:0",
            record.cash,
            record.credit
        ]
        recordRows.push(data);
    })

    let total_sale = 0;
    recordRows.forEach((data) => {
        if (data[5] != "00:0")
            total_sale += Number(data[5]);
    })

    let total_purchase = 0;
    recordRows.forEach((data) => {
        if (data[6] != "00:0")
            total_purchase += Number(data[6]);
    })
    console.log(total_purchase)
    let total_cash = 0;
    recordRows.forEach((data) => {

        total_cash += Number(data[7]);
    })
    let total_credit = 0;
    recordRows.forEach((data) => {

        total_credit += Number(data[8]);
    })
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text('Powered By BookKeeping', 150, 20);
    doc.text('Statement', 100, 30);
    doc.text('(summery)', 100, 40);
    const column = ["Total Purchase($)", "Total Sale($) ", "Final Cash($) ", "Final Credit($)"];
    const tableRows = [];

    let sum = [
        total_purchase,
        total_sale,

        total_cash,
        total_credit
    ]
    tableRows.push(sum);
    doc.autoTable(column, tableRows, { startY: 44 });





    let last_row = [
        "",
        "",
        "",
        "",
        "Total",
        total_sale,
        total_purchase,
        total_cash,
        total_credit
    ]
    recordRows.push(last_row);

    doc.autoTable(columnR, recordRows, { startY: 70 });
    // doc.text(businessName, 15, 15);

    // doc.text(address, 15, 22);
    // doc.text(zip, 15, 29);
    // doc.text(country, 15, 36);
    // doc.setFontSize(16);
    // doc.text(`${type} Report`, 140, 10);
    // doc.text(ExpenseId, 140, 20);
    // doc.setFontSize(12)
    // doc.text(`Report Time  :  ${title}`, 15, 47);
    // doc.text(`Submitted By  : ${submittedBy}`, 15, 54);
    // doc.text(`Reported To  : ${reportedTo}`, 15, 61);
    // doc.text(`Submitted On  :  ${submittedOn}`, 120, 54);
    // doc.text(`Reporting Period  :  ${reportingPeriodStart}  ${reportingPeriodEnd}`, 120, 61);
    // const column = ["Date", "Client Name", "Product Details", "Quantity", "Price", "Amount"];
    // const tableRows = [];
    // expences.forEach((record) => {
    //     const data = [
    //         record.date,
    //         record.name,
    //         record.details,
    //         record.quantity,
    //         record.price,
    //         record.amount
    //     ]
    //     tableRows.push(data);
    // })
    // doc.autoTable(column, tableRows, { startY: 75 });

    // doc.text(`Total Amount : ${totalAmount}`, 160, 60 + 20 * expences.length)
    doc.save(`report.pdf`);
}
