import React from "react";
import "./BillingSummary.css";
import { useUserData } from "../../../../contexts/UserDataProvider.js";

export const BillingSummary = () => {
  const { userDataState } = useUserData();

  return (
    <div className="billing-container">
      <div className="price-details-container">
        <div>
          <h4 className="subtotal">Subtotal</h4>
          <h3>${userDataState.orderDetails?.cartItemsTotal}</h3>
        </div>

        <div>
          <h4 className="subtotal">Discount</h4>
          <h3>
            $
            {(
              userDataState.orderDetails?.cartItemsTotal -
              userDataState.orderDetails?.cartItemsDiscountTotal
            ).toFixed(2)}
          </h3>
        </div>

        <div>
          <h4>Shipping</h4>
          <h3>Free</h3>
        </div>
        <div>
          <span>Total</span>
          <span>${userDataState.orderDetails?.cartItemsDiscountTotal}</span>
        </div>
      </div>
    </div>
  );
};
