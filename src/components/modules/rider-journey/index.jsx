import { useState } from "react";
import RriderBanner from "../../../assets/images/rider-banner.webp";
import style from "./RiderJourney.module.css";
import Modal from "../../shared/modal/Modal";
import ClickTooltip from "../../shared/tooltip/ClickTooltip";
const RiderJourney = () => {
    const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="container m-auto">
      <div className="m-auto p-2 md:w-2xl inset-shadow-sm">
        <img src={RriderBanner} alt="Rider Journey Logo" />

        <ClickTooltip content={<div className="mt-3 policy-info bg-sky-50 p-4 rounded-2xl border-sky-300 border">
            <p>Your existing policy details</p>
            <p>Policy name :HDFC LIFE CLICK 2 PROTECT PLUS</p>
            <p>Life Assured Name : SACHIN RAMAN SHINGOTE</p>
            <p>Policy No : 23246214</p>
            <p>Sum Assured : ₹ 70,00,000</p>
            <button onClick={()=>{alert('')}}>click</button>
          </div>}>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Click me</button>
      </ClickTooltip>
        <div className="mt-3 w-11/12 m-auto">
          <p className={style.username}>Dear SACHIN,</p>
          <p className={style.premium + " pt-0 pb-4"}>
            <span className={style.welcomeText}>Welcome to HDFC Life.</span>{" "}
            Your decision to opt for Riders will go a long way in enhancing your
            family's financial security.
          </p>
          <div
            className={
              style.policyCard +
              " inset-shadow-sm inset-shadow-blue mt-3 policy-info bg-sky-50 p-4 rounded-2xl border-blue-300 vborder-2 bg-linear-60 from-blue-100 via-blue-100 to-blue-200"
            }
          >
            <p className={style.policyHeading}>Your existing policy details</p>
            <p>
              Policy name : <span className={style.redText}> HDFC LIFE</span>{" "}
              <span className={style.productName}>CLICK 2 PROTECT PLUS</span>
            </p>
            <p>
              Life Assured Name :{" "}
              <span className="font-semibold"> SACHIN RAMAN SHINGOTE</span>
            </p>
            <p>
              Policy No : <span className="font-semibold"> 23246214</span>
            </p>
            <p>
              Sum Assured : <span className="font-semibold"> ₹ 70,00,000</span>
            </p>
          </div>
          <div className="mt-4 inset-shadow-sm inset-shadow-sky policy-info bg-sky-50 p-4 rounded-2xl border-sky-200 border-1 bg-linear-60 from-sky-50 via-sky-100 to-sky-200">
            <h6>
              Here’s a customized illustration for you to refer and make the
              payment
            </h6>
            <div className={style.riderName1}>
              <div className={style.riderName1}>
                <span className={style.redText}> HDFC LIFE </span>
                <span className={style.productName}> PROTECT PLUS RIDER</span>
              </div>
              <p className="childname">(Accidental Death Cover)</p>
              <p className="limited-offer-badge">Limited Period Offer Only</p>
              <p className="socialmessage">
                83% people like you choose a add on/rider to enhance their
                family`s protection
              </p>
              <p className="childname">Risk Commencement Date: 16th Feb 2025</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="...">
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5">
                  <p className="rider-sum">Rider Sum Assured</p>
                  <p className="rider-money">₹ 70,00,000</p>
                </div>
              </div>
              <div className="...">
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5">
                  <p className="rider-sum">Rider Premium</p>
                  <p className="rider-money">
                    ₹ 4,131<span className="rider-sum">(Annually)</span>
                  </p>
                </div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer" style={{height: '30px'}}>
  <input type="checkbox" class="sr-only peer"/>
  <div class="w-12 h-7 bg-gray-400 rounded-full peer-checked:bg-blue-600 transition-colors duration-300"></div>
  <div class="absolute left-1 top-1 bg-white w-5 h-5 rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-5"></div>
</label>
              <div className="...">
                <input
                  className="accidentalCoverDeath"
                  type="checkbox"
                  data-indeterminate="false"
                  value=""
                  checked
                  onChange={()=>{}}
                />
              </div>
              <label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" class="peer hidden"/>
  <div class="animate-ring-once w-6 h-6 border-2 border-blue-500 rounded transition duration-200
              hover:animate-ring-once peer-checked:bg-blue-500">
  </div>
  <span class="ml-2 text-gray-700">Hover Checkbox</span>
</label>
            </div>
          </div>
          <button
        onClick={() => setModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Open Popup
      </button>
      <ClickTooltip content="Tooltip on click ✨">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Click me</button>
      </ClickTooltip>
          <Modal isOpen={isModalOpen} animate={!isModalOpen} onClose={() => {setModalOpen(false);}}>
        <h2 className="text-xl font-semibold mb-4">React + Tailwind Popup</h2>
        <p className="text-gray-600 mb-4">
          This modal is reusable and customizable.
        </p>
        <div className="mt-3 policy-info bg-blue-50 p-4 rounded-2xl border-sky-300 border">
            <p>Your existing policy details</p>
            <p>Policy name :HDFC LIFE CLICK 2 PROTECT PLUS</p>
            <p>Life Assured Name : SACHIN RAMAN SHINGOTE</p>
            <p>Policy No : 23246214</p>
            <p>Sum Assured : ₹ 70,00,000</p>
          </div>
        <button
          onClick={() => setModalOpen(false)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
        
      </Modal>
      {/* <div class="relative group inline-block">
  <button class="px-4 py-2 bg-green-600 text-white rounded">Hover</button>
  
 
  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 hidden group-hover:block bg-black text-white text-sm px-3 py-1 rounded z-10">
    Tooltip with arrow
   
    <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
  </div>
</div>
<div class="relative group inline-block">
  <button class="px-4 py-2 bg-blue-600 text-white rounded">Hover me</button>
  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm px-3 py-1 rounded">
    Tooltip text
  </div>
</div> */}
          <div className="mt-3 policy-info bg-blue-50 p-4 rounded-2xl border-sky-300 border">
            <p>Your existing policy details</p>
            <p>Policy name :HDFC LIFE CLICK 2 PROTECT PLUS</p>
            <p>Life Assured Name : SACHIN RAMAN SHINGOTE</p>
            <p>Policy No : 23246214</p>
            <p>Sum Assured : ₹ 70,00,000</p>
          </div>
          <div class="relative group inline-block">
  <button class="px-4 py-2 bg-blue-600 text-white rounded">Hover me</button>
  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm px-3 py-1 rounded">
    Tooltip text
  </div>
</div>
<ClickTooltip content={<div className="mt-3 policy-info bg-sky-50 p-4 rounded-2xl border-sky-300 border">
            <p>Your existing policy details</p>
            <p>Policy name :HDFC LIFE CLICK 2 PROTECT PLUS</p>
            <p>Life Assured Name : SACHIN RAMAN SHINGOTE</p>
            <p>Policy No : 23246214</p>
            <p>Sum Assured : ₹ 70,00,000</p>
            <button onClick={()=>{alert('')}}>click</button>
          </div>}>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Click me</button>
      </ClickTooltip>
         <div className="mt-3 policy-info bg-sky-50 p-4 rounded-2xl border-sky-300 border">
            <p>Your existing policy details</p>
            <p>Policy name :HDFC LIFE CLICK 2 PROTECT PLUS</p>
            <p>Life Assured Name : SACHIN RAMAN SHINGOTE</p>
            <p>Policy No : 23246214</p>
            <p>Sum Assured : ₹ 70,00,000</p>
          </div>
          {/*  <div className="mt-3 policy-info bg-sky-50 p-4 rounded-2xl border-sky-300 border">
            <p>Your existing policy details</p>
            <p>Policy name :HDFC LIFE CLICK 2 PROTECT PLUS</p>
            <p>Life Assured Name : SACHIN RAMAN SHINGOTE</p>
            <p>Policy No : 23246214</p>
            <p>Sum Assured : ₹ 70,00,000</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default RiderJourney;
