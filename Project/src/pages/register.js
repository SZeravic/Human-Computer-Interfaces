import React from "react";
import Register from 'components/Private/Register';
import { handleRegestration } from "services/auth/auth";

export default () => (
    <>
      <Register handleRegestration={handleRegestration}/>
    </>
);