const InputField = () => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter a task..." className="input-box" />
      <button className="input-submit" type="submit">
        ADD
      </button>
    </form>
  );
};
export default InputField;
