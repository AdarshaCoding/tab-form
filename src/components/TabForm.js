import { useState } from "react";
import { tabInfo } from "../utils/configTab";
const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ActiveTabComponent = tabInfo[activeTab].component;
  const [data, setData] = useState({
    name: "Adarsha",
    age: 34,
    email: "adarsha@gmail.com",
    interests: ["coding", "cricket"],
    theme: "dark",
  });
  const handleNextClick = () => {
    setActiveTab((prev) => prev + 1);
  };
  const handlePrevClick = () => {
    setActiveTab((prev) => prev - 1);
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
        <ActiveTabComponent data={data} setData={setData} />
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
