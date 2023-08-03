import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/AuthAction";
import { getAuthToken } from "../utils/helper";

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if(getAuthToken()){
      const payload = {token : getAuthToken()};
      dispatch(logout(payload))
    }
  }, []);
  return <Navigate to="/signin" replace={true} />;
};

export default Logout;
