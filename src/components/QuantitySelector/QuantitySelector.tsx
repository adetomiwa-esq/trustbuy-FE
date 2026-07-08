import "./QuantitySelector.scss";

interface QuantitySelectorProps {
  quantity: number;
  max: number;

  onIncrease: () => void;

  onDecrease: () => void;
}

const QuantitySelector = ({
  quantity,
  max,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) => {
  return (
    <div className="quantity">

      <button
        onClick={onDecrease}
        disabled={quantity === 1}
      >
        −
      </button>

      <span>{quantity}</span>

      <button
        onClick={onIncrease}
        disabled={quantity === max}
      >
        +
      </button>

    </div>
  );
};

export default QuantitySelector;