import "./Brands.css";
import Input from "../../components/Input";

function Brands({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Marcas</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Todos
        </label>
        <Input
          handleChange={handleChange}
          value="apple"
          title="Apple"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="samsung"
          title="Samsung"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="xiaomi"
          title="Xiaomi"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="huawei"
          title="Huawei"
          name="test"
        />
      </div>
    </div>
  );
}

export default Brands;