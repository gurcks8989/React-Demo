import useInput from "../hooks/useInput";
import Input from "./Input";

const isNotEmpty = (value) => value.trim() !== "" ;
const isEmail = (value) => value.includes("@") ;

const BasicForm = (props) => {
  const firstName = useInput(isNotEmpty);
  const lastName = useInput(isNotEmpty);
  const email = useInput(isEmail);

  let formIsValid = false;

  if (firstName.isValid && lastName.isValid && email.isValid)
    formIsValid = true;

  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, email) ;
    if (!formIsValid) return;
    firstName.reset();
    lastName.reset();
    email.reset();
  };

  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className="control-group">
        <Input
          type="text"
          id="firstName"
          title="First Name"
          value={firstName.value}
          onChange={firstName.valueChangeHandler}
          onBlur={firstName.inputBlurHandler}
          hasError={firstName.hasError}
          errorText="First name must be not empty."
        />
        <Input
          type="text"
          id="lastName"
          title="Last Name"
          value={lastName.value}
          onChange={lastName.valueChangeHandler}
          onBlur={lastName.inputBlurHandler}
          hasError={lastName.hasError}
          errorText="Last name must be not empty."
        />
      </div>
      <Input
        type="email"
        id="email"
        title="E-Mail Address"
        value={email.value}
        onChange={email.valueChangeHandler}
        onBlur={email.inputBlurHandler}
        hasError={email.hasError}
        errorText="Please enter corrept E-mail Address."
      />
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
