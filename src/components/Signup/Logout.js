
import React from 'react'
import '../HomePage/HomePage.css'
import HomeNavbar from '../Navbar/HomeNavbar'
export default function Logout() {

   
    return (
        <div>
            <HomeNavbar/>

            <div className=" home">
                <img src="https://media.istockphoto.com/photos/mobile-banking-network-picture-id1049658918?k=6&m=1049658918&s=612x612&w=0&h=4pyIeY9ngy-rwto4Xd8s5mQ4iYH_gCIkHgkE_avIOfQ=" alt="home_page"  />
                <h5 class="centered">Thank you , You are logged out !!</h5>
            </div>
        </div>
    )
}
