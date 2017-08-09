import { MdcBaseProps, sDataValue } from "../_base";

export interface DataTableProps extends MdcBaseProps {

}

export const DataTable = (props: DataTableProps) => {
    const dom = "",
        dialog = new window["mdDataTable"].default({
            type: 'date'
        });
    return dom;
}