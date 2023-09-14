import Brands from "./Brands/Brands";
import Price from "./Price/Price";
import Storage from "./Storage/Storage";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <Brands handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Storage handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;