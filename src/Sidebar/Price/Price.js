import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Precios</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>Todos
        </label>

        <Input
          handleChange={handleChange}
          value={299.99}
          title="$100 - 300"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={399.99}
          title="$300 - $500"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={499.99}
          title="$400 - $600"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={600}
          title="Over $600"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;