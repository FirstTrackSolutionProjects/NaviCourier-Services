import NavItem from "./NavItem";
import { navItems } from "../Constants";
import {  useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import WalletRechargeModal from "./WalletRechargeModal";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useWallet } from "../context/WalletContext";

export default function Header() {
  const navigate = useNavigate();
  const [showRecharge, setShowRecharge] = useState(false)
  const {verified, isAuthenticated, logout, business_name} = useAuth()
  const { balance, refreshBalance } = useWallet();
  const [isMenu,setIsMenu] = useState(false)
  const closeRechargeModal = () => {
    setShowRecharge(false);
  }
  const toggleMenu = () => {
    setIsMenu(!isMenu);
    }
  useEffect(()=>{
    if (!verified) return;
    refreshBalance();
  },[isAuthenticated])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    {showRecharge && <WalletRechargeModal onClose={closeRechargeModal}/>}
    <section className="relative bg-gray-100 mt-5">
      {/* Background Image */}
      <div className="relative h-[500px] w-full">
        <img
          src="/image/header1.jpg"
          alt="Logistics"
          className="absolute w-full h-full object-cover"
        />
        {/* Dark blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2535]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center px-6 md:px-16">
        <div className="max-w-lg space-y-6">

          <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
            YOUR TRUSTED <br />
            <span className="text-yellow-400">LOGISTICS PARTNER</span> <br />
            WORLDWIDE
          </h1>

          <p className="text-gray-200 mt-3 text-lg md:text-xl opacity-95">
            Fast, secure & reliable delivery — anytime, anywhere.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/tracking")}
              className="bg-yellow-400 text-[#0A2540] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-transform shadow-md hover:scale-105"
            >
              TRACKING
            </button>

            <button
              onClick={() => navigate("/login")}
              className="bg-white text-[#0A2540] px-8 py-3 rounded-lg text-lg font-semibold border-2 border-white hover:bg-gray-100 transition-transform shadow-md hover:scale-105"
            >
              Login
            </button>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}
