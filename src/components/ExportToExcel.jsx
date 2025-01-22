import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import * as XLSX from "xlsx";
export default function ExportToExcel(props){
    const exportToExcel = () => {
        console.log("hii")
        const worksheet = XLSX.utils.json_to_sheet(props.data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Habits Data");
        XLSX.writeFile(workbook, "habits.xlsx");
      };
    return(
        <>
        <button disabled={props.disabled} className={props.disabled ? 'opacity-50' : ''} onClick={exportToExcel}><FontAwesomeIcon icon={faFileExport} /></button>
        </>
    )
}