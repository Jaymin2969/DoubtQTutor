import React, { useEffect } from "react";
import Bannerarea from "./Bannerarea";
import Testimonialarea from "./Testimonialarea";
import Aboutarea from "./Aboutarea";
import { useDispatch } from "react-redux";
import { SIGNUP_REQUEST } from "../redux/reducers/AuthReducer";

const Home = () => {
  const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch({
  //     type:SIGNUP_REQUEST
  //   })
  // },[])

  // useEffect(() => {
  //   document.title = 'DoubtQ - A captivating mystery that keeps you on the edge of your seat';
  // }, []);

  return (
    <>
      <Bannerarea />
      <Testimonialarea />
      <Aboutarea />
    </>

  )
}

export default Home;