function Form(props) {
  return (
    <form data-testid="form">
      <div className="header">
        <h1>{props.header}</h1>
      </div>
      {props.children}
    </form>
  );
}
export default Form;
