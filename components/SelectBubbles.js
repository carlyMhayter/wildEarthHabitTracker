export default function SelectBubbles(props) {
  const { labelName, bubbles } = props;
  return (
    <div className="select-bubble-container">
      <div className="select-bubbles-label">{labelName}</div>
      <div className="select-bubbles-row">
        {bubbles.map((item) => (
          <div
            key={item.time}
            className={`select-bubbles-bubble ${
              item.selected ? "selected-bubble" : ""
            }`}
          >
            {item.time}
          </div>
        ))}
      </div>
    </div>
  );
}
