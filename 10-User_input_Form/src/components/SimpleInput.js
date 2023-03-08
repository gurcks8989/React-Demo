import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
  const name = useInput((value) => value.trim() !== "");
  const email = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (name.isValid && email.isValid) formIsValid = true;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!name.isValid && !email.isValid) return;

    name.reset();
    email.reset();
  };

  const errorContent = (errorType) => (
    <p className="error-text ">{errorType}</p>
  );

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${name.hasError && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={name.valueChangeHandler}
          onBlur={name.inputBlurHandler}
          value={name.value}
        />
        {name.hasError && errorContent("Name must not be empty.")}
      </div>
      <div className={`form-control ${email.hasError && "invalid"}`}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={email.valueChangeHandler}
          onBlur={email.inputBlurHandler}
          value={email.value}
        />
        {email.hasError && errorContent("Please enter a valid email.")}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
