import { useState } from "react";
import Loader from "../shared/loader/Loader";
import PolicyServices from "../../services/common/PolicyServices";

import HDFCLOGO from "../../assets/images/hdfc-logo.svg";
import styles from "./Login.module.css";
import PolicyDetails from "../policy-details/PolicyDetails";

const Login = (props) => {
  const auth = props.auth;
  const setAuth = props.setAuth;
  const [loading, setLoading] = useState(false);
  const [policyData, setPolicyData] = useState(null);
  const [policyInfo, setPolicyInfo] = useState({
    emailid: "",
    mobileno: "",
    policyno: "",
  });
  const isAllData =
    policyInfo.emailid !== "" &&
    policyInfo.mobileno !== "" &&
    policyInfo.policyno !== "";

  const handleMobileNo = (e) => {
    const value = e.target.value;
    // Allow only digits and limit to 10 characters
    if (value.length === 10) {
      return;
    }
    if (/^\d{0,10}$/.test(value)) {
      setPolicyInfo((prevData) => {
        return { ...prevData, mobileno: e.target.value };
      });
    }
  };
  const handleSubmit = (e) => {
    if (isAllData) {
      setLoading(true);
      setTimeout(() => {
        PolicyServices.fetchPolicyById(policyInfo.policyno)
          .then((res) => {
            if (res.data.length !== 0) {
              console.log(res);
              setPolicyData(res.data[0]);
            } else {
              setPolicyData({});
            }

            setLoading(false);
          })
          .catch((err) => {
            console.log(err.message);
            setLoading(false);
          });
      }, 500);
    }
  };
  return (
    <>
      {loading && <Loader />}
      <div className="container mx-auto pt-7">
        <header>
          <div className="flex justify-center md:justify-normal">
            <img src={HDFCLOGO} className={styles.height65} alt="logo"/>
          </div>
        </header>
        <h3 className="text-center text-3xl underline py-5 hidden">Login</h3>
        <div className="flex flex-col justify-center w-fit m-auto p-2">
          <div className="mt-3">
            <label
              htmlFor="emailid"
              className="text-sm font-medium text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white"
            >
              Email Id:
            </label>
            <input
              type="email"
              id="emailid"
              name="emailid"
              placeholder="Enter email id"
              onChange={(e) => {
                setPolicyInfo((prevData) => {
                  return { ...prevData, emailid: e.target.value };
                });
              }}
              className="border w-full rounded border-grey-300 p-1.5 focus:border-sky-500 focus:outline focus:outline-sky-500 sm:text-sm"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="mobileno"
              className="text-sm font-medium text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white"
            >
              Mobile No:
            </label>
            <input
              type="number"
              id="mobileno"
              name="mobileno"
              placeholder="Enter 10-digit mobile number"
              onChange={handleMobileNo}
              value={policyInfo.mobileno}
              className="border w-full rounded border-grey-300 p-1.5 focus:border-sky-500 focus:outline focus:outline-sky-500 sm:text-sm"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="policyNo"
              className="text-sm font-medium text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white"
            >
              Policy No:
            </label>
            <input
              type="text"
              id="policyNo"
              name="policyno"
              placeholder="Enter policy number"
              onChange={(e) => {
                setPolicyInfo((prevData) => {
                  return { ...prevData, policyno: e.target.value };
                });
              }}
              className="border w-full rounded border-grey-300 p-1.5 focus:border-sky-500 focus:outline focus:outline-sky-500 sm:text-sm"
            />
          </div>
          <div className="mt-3">
            <button
              type="button"
              name="submit"
              disabled={!isAllData}
              id="submit"
              onClick={handleSubmit}
              className="bg-red-700 text-white hover:bg-red-900 border border-red-950 rounded p-1 disabled:bg-gray-300 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center w-fit m-auto p-2">
          {isAllData && !loading && policyData !== null && (
            <PolicyDetails policyData={policyData} />
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
