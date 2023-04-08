import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const [setLoading] = useState(true);

  const [values, setValues] = useState({
    password: "",
    username: "",
  });

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("username"),
      password: data.get("password"),
    });
    createacc();
  };

  async function createacc() {
    try {
      let result = await fetch(
        "https://hacknova2.pythonanywhere.com/login/login/",
        {
          method: "POST",
          body: JSON.stringify({
            password: values.password,
            username: values.username,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      result = await result.json();
      console.log(result);
      if (result.token) {
        Swal.fire("Logged in Successfully!", "success", "success");
        sessionStorage.setItem("name", result.user.username);
        sessionStorage.setItem(
          "user_id",
          JSON.parse(JSON.stringify(result.user.id))
        );
        sessionStorage.setItem("token", result.token);
        history("/profile");
      } else {
        Swal.fire("Oops!!", "Some error while login", "error");
      }
    } catch (error) {
      console.log("Error" + error);
      setLoading(false);
    }
  }

  return (
    <div className="login-form-bg h-100">
      <div className="container h-100">
        <div className="row justify-content-center h-100">
          <div className="col-xl-6">
            <div className="form-input-content">
              <div className="card login-form mb-0">
                <div className="card-body pt-5">
                  <h4>VLearn</h4>
                  <form
                    className="mt-5 mb-5 login-input"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        id="username"
                        label="Username"
                        name="username"
                        value={values.username}
                        onChange={handleChanges}
                        autoComplete="name"
                        autoFocus
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        label="Password"
                        id="password"
                        value={values.password.trim()}
                        onChange={handleChange("password")}
                        autoComplete="current-password"
                        required
                      />
                    </div>
                    <button
                      className="btn login-form__btn submit w-100"
                      type="submit"
                    >
                      Login
                    </button>
                  </form>
                  <p className="mt-5 login-form__footer">
                    Dont have an account?
                    <Link to="/" className="text-primary">
                      Sign Up
                    </Link>
                    now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
