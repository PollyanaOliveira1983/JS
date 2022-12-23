import * as shipment from "./shipping-service.js"

export function total(order){

    const shipments = shipment.shipment(order);
    const discount = order.basic * (order.discount/100);

    return order.basic - discount + shipments;
}