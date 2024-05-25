import { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import "./app.css";
import FormInput from "./components/FormInput";
import Success from "./components/Success";

const App = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage: "First name is required",
      label: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Last name is required",
      label: "Last Name",
      required: true,
    },
    {
      id: 3,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "phoneNo",
      type: "text",
      placeholder: "Phone No.",
      errorMessage: "Phone number should be valid!",
      label: "Phone No.",
      pattern: `^[+]?[0-9]{1,4}?[-.\s\(\)]?([0-9]{1,3}[-.\s\(\)]?){1,4}([0-9]{1,4}[-.\s\(\)]?){1,2}$`,
      required: true,
    },
    {
      id: 7,
      name: "country",
      type: "text",
      placeholder: "Country",
      errorMessage: "Country is required",
      label: "Country",
      required: true,
    },
    {
      id: 8,
      name: "city",
      type: "text",
      placeholder: "City",
      errorMessage: "City is required",
      label: "City",
      required: true,
    },
    {
      id: 9,
      name: "panNo",
      type: "text",
      placeholder: "Pan No.",
      errorMessage: "Pan number is required",
      label: "Pan No.",
      required: true,
    },
    {
      id: 10,
      name: "aadharNo",
      type: "text",
      placeholder: "Aadhar No.",
      errorMessage: "Aadhar number is required",
      label: "Aadhar No.",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    inputs.forEach((input) => {
      if (!values[input.name]) {
        newErrors[input.name] = input.errorMessage;
      } else {
        newErrors[input.name] = "";
      }
    });

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      navigate("/success", { state: values });
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <form onSubmit={handleSubmit}>
              <h1>Register</h1>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                  error={errors[input.name]}
                />
              ))}
              <button>Submit</button>
            </form>
          </div>
        }
      />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default App;
