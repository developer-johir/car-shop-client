import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Footer = () => {
    return (
        <div className='max-w-screen-xl mx-auto bg-slate-800 py-5'>

<footer className="max-w-screen-xl mx-auto footer py-20 px-10 bg-slate-800 text-white border-b-2 border-red-500">
  <div>
  <div className='flex'>
      <Link to='/'><img className='w-14 h-14' src={logo} alt="" /></Link>
    <Link to='/' className="normal-case font-bold text-4xl text-red-600 mt-2 ml-3">CAR-SHOP</Link>
    </div>
    <p className='mt-5'>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a href="/" className="link link-hover">Branding</a> 
    <a href="/" className="link link-hover">Design</a> 
    <a href="/" className="link link-hover">Marketing</a> 
    <a href="/" className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a href="/" className="link link-hover">About us</a> 
    <a href="/" className="link link-hover">Contact</a> 
    <a href="/" className="link link-hover">Jobs</a> 
    <a href="/" className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a href="/" className="link link-hover">Terms of use</a> 
    <a href="/" className="link link-hover">Privacy policy</a> 
    <a href="/" className="link link-hover">Cookie policy</a>
  </div>
</footer>

            <div className='pt-4'>
            <p className='text-center text-white'>Copyright 2022 <span className='text-red-600 font-semibold'>CAR-SHOP</span> | Design By <span className='text-red-600 font-semibold'>Jahirul Islam</span></p>
            </div>
        </div>
    );
};

export default Footer;