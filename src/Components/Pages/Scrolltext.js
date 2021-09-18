import React from "react";
import '../styled-components/scrolltext.css'
import { FaSpotify,FaApple,FaYoutube } from "react-icons/fa";
export default function Scrolltext() {
  return (
    <div>
      <div>
        <div id="scroll-text"><FaSpotify style={{color:'green'}}/> Spotify <FaApple  style={{color:'white'}}/> Apple Music <FaYoutube  style={{color:'red'}}/> Youtube</div>
      </div>
    </div>
  );
}
