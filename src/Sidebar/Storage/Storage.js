import "./Storage.css";
import Input from "../../components/Input";

const Storage = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Capacidad</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark"></span>
          Todos
        </label>

        <Input
          handleChange={handleChange}
          value="128Gb"
          title="128Gb"
          name="test1"
          color="128Gb"
        />

        <Input
          handleChange={handleChange}
          value="256Gb"
          title="256Gb"
          name="test1"
          color="256Gb"
        />
        
      </div>
    </>
  );
};

export default Storage;