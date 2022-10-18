import React, { Fragment, useState } from "react";
import Modal from "../../UI/Modal";
import Delivery from "./Delivery";
import classes from "./OrderWindow.module.css";
import Pickup from "./Pickup";
import { CircularProgress } from "@mui/material";

const OrderWindow = (props) => {
  const [isDelivery, setIsdelivery] = useState(true);
  const [orderIsSubmited, setOrderIsSubmited] = useState(false);
  const [isOrderSentProgress, setOrderSentProgress] = useState(false);

  return (
    <Fragment>
      {orderIsSubmited ? (
        <Modal onHideOrderWindow={props.onHideOrderWindow}>
          <p className={classes["submited-order"]}>Order succesfully sent!</p>
        </Modal>
      ) : (
        <Fragment>
          {isOrderSentProgress ? (
            <Fragment>
              <Modal onHideOrderWindow={props.onHideOrderWindow}>
                <CircularProgress
                  color="success"
                  style={{ marginLeft: "42%" }}
                ></CircularProgress>
              </Modal>
            </Fragment>
          ) : (
            <Modal onHideOrderWindow={props.onHideOrderWindow}>
              <div className={classes.buttons}>
                <div className={classes["service-option-btn-border"]}>
                  <button
                    className={
                      isDelivery
                        ? classes["service-option-btn-activated"]
                        : classes["service-option-btn"]
                    }
                    onClick={() => setIsdelivery(true)}
                  >
                    Delivery
                  </button>
                  <button
                    className={
                      !isDelivery
                        ? classes["service-option-btn-activated"]
                        : classes["service-option-btn"]
                    }
                    onClick={() => setIsdelivery(false)}
                  >
                    Pickup
                  </button>
                </div>
                <button
                  className={classes["cancel-btn"]}
                  onClick={props.onHideOrderWindow}
                >
                  X
                </button>
              </div>
              <div>
                {isDelivery ? (
                  <Delivery
                    setOrderIsSubmited={setOrderIsSubmited}
                    setOrderSentProgress={setOrderSentProgress}
                  ></Delivery>
                ) : (
                  <Pickup
                    setOrderIsSubmited={setOrderIsSubmited}
                    setOrderSentProgress={setOrderSentProgress}
                  ></Pickup>
                )}
              </div>
            </Modal>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderWindow;
