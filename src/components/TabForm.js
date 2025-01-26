import { useState } from "react";
import Interest from "../pages/Interest";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    name: "Adarsha",
    age: 34,
    email: "adarsha@gmail.com",
    interests: ["coding", "cricket"],
    theme: "dark",
  });
  const tabInfo = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 3) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 10) {
          err.email = "Email is not valid";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select atleast one interest";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabInfo[activeTab].component;
  const handleNextClick = () => {
    if (tabInfo[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handlePrevClick = () => {
    if (tabInfo[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };
  const handleSubmit = () => {
    //Make an API call
    console.log(data);
  };
  return (
    <div className="">
      <div className="app-header">
        {tabInfo.map((tab, i) => (
          <div className="tab-heading" key={i} onClick={() => setActiveTab(i)}>
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-container">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tabInfo.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabInfo.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};
export default TabForm;
