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
    </div>
  );
};
export default TabForm;
