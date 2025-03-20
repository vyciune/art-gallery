import "./CartProductsSummary.css";

import React from "react";
import { useUserData } from "../../../../contexts/UserDataProvider.js";
import Tilt from "react-parallax-tilt";

export const CartProductsSummary = () => {
  const { userDataState } = useUserData();
  return (
    <div className="product-details-container">
      <h1>In Your Bag</h1>
      <div className="ordered-products-container">
        {userDataState.cartProducts?.map(
          ({ id, img, name, qty, discounted_price }) => (

                <div key={id} className="ordered-product-card">
                    <Tilt
                        key={id}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        transitionSpeed={2000}
                        scale={1.02}
                        glareEnable={false}
                        tiltReverse={true}
                    >
                  <img src={img} alt={name} />
                    </Tilt>
                  <span>
                    <span>{name} - </span>
                    <span>{qty}</span>
                  </span>
                  <h3>${discounted_price}</h3>
                </div>

          )
        )}
      </div>
    </div>
  );
};
