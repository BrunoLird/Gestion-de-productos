import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Ofertas</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="Todos los productos" />
          <Button onClickHandler={handleClick} value="Apple" title="Apple" />
          <Button onClickHandler={handleClick} value="Samsung" title="Samsung" />
          <Button onClickHandler={handleClick} value="Xiaomi" title="Xiaomi" />
          <Button onClickHandler={handleClick} value="Huawei" title="Huawei" />
        </div>
      </div>
    </>
  );
};

export default Recommended;