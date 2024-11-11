import "./styles.css";

const Input = ({ label, type, value }: any) => {
  const inputClasses: any = {
    text: "input-text",
    submit: "input-submit",
  };

  const className = inputClasses[type];

  return (
    <div className="input_component">
      {label && <label className="input__label">{label}</label>}
      <input type={type} value={value} className={className} />
    </div>
  );
};

export { Input };
