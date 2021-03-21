import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./custom-button.styles.scss";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export const CustomButton = (props) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      className={`custom-button ${props.isRegister ? "registerButton" : ""}`}
      variant={props.variant}
      size="lg"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
      block
    >
      {isLoading ? "Loading…" : props.children}
    </Button>
  );
};
