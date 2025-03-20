import "./AddressSection.css";
import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";

import { useAddress } from "../../../../contexts/AddressProvider.js";
import { useUserData } from "../../../../contexts/UserDataProvider.js";
import { AddressModal } from "../AddressModal/AddressModal";

export const AddressSection = () => {
  const { userDataState, dispatch } = useUserData();
  const { isAddressModalOpen, setIsAddressModalOpen } = useAddress();

  const handleAddressSelect = (address) => {
    dispatch({
      type: "SET_ORDER",
      payload: { orderAddress: address },
    });
  };

  return (
      <div className="address-container">
        <h2>Select Your Address</h2>
        {userDataState.addressList?.map((address) => {
          const { name, street, city, state, country, pincode, phone, _id } = address;
          const isSelected = _id === userDataState.orderDetails?.orderAddress?._id;

          return (
              <Tilt
                  key={_id}
                  className="tilt-container"
                  tiltMaxAngleX={2}
                  tiltMaxAngleY={2}
                  transitionSpeed={2000}
                  scale={isSelected ? 1.02 : 1}
                  glareEnable={false}
                  tiltReverse={true}
              >
                <div
                    className={`address-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleAddressSelect(address)}
                >
                  <p className="name">{name}</p>
                  <p className="address">
                    {street}, {city}, {state}, {country} {pincode} - {phone}
                  </p>
                </div>
              </Tilt>
          );
        })}

        <div className="add-new-address-btn-container">
          <button
              className="add-new-address-btn"
              onClick={() => setIsAddressModalOpen(true)}
          >
            Add New Address
          </button>
        </div>

        {isAddressModalOpen && <AddressModal />}
      </div>
  );
};