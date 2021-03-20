import React from "react";
import HomeNavbar from "../Navbar/HomeNavbar";
import "./HomePage.css";
export default function HomePage() {
  return (
    <div>
      <HomeNavbar />

      <div className=" home">
        <img
          src="https://media.istockphoto.com/photos/mobile-banking-network-picture-id1049658918?k=6&m=1049658918&s=612x612&w=0&h=4pyIeY9ngy-rwto4Xd8s5mQ4iYH_gCIkHgkE_avIOfQ="
          alt="home_page"
        />
        <h1 className="centered">Welcome to Banking App</h1>
      </div>
    </div>
  );
}
