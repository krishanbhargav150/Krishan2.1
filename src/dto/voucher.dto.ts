
export interface IVoucherDto {

    voucherNo : string;
    companyId : number;
    vanId : number;
    employeeId : number;
    items : any[];
    voucherItems : Array<IVoucherItemsDto>;

}

export interface IVoucherItemsDto{

    productId : number;
    batchNo : string;
    mrp : number;
    price : number;
    mfgDate : Date;

}