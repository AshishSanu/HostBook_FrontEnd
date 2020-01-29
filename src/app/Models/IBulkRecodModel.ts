export interface IBulkRecordModel{
    id : number;
    region : string;
    country : string;
    itemType : string;
    salesChannel : string;
    orderPriority : string;
    orderId : string;
    unitsSold : number;
    unitPrice : number;
    unitCost : number;
    totalRevenue : number;
    totalCost : number;
    totalProfit : number;
    shipDate : string;
    orderDate : string;
}