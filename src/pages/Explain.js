import React, { useState } from "react";
import Grid from "@mui/material/Grid";

const Explain = () => {
  const [code, setCode] = useState([]);
  const [values, setValues] = useState({
    text: "",
  });

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      text: data.get("text"),
    });
    createcode();
  };

  async function createcode() {
    try {
      var formdata = new FormData();
      formdata.append("text", `${values.text}`);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(
        "http://csvshow.pythonanywhere.com/visualapp/codetoenglish",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          setCode(result);
        });
    } catch (error) {
      console.log("Error" + error);
      setCode("No explaination found")
    }
  }

  return (
    <>
      <Grid
        container
        component="main"
        sx={{ height: "70vh", width: "200vh", paddingLeft: "3rem" }}
      >
        <Grid item xs={false} sm={4} md={7}>
          <form
            className="mt-5 mb-5 login-input"
            onSubmit={handleSubmit}
            style={{ margin: "15rem 10rem" }}
          >
            <div className="form-group">
              <h3 style={{margin:"4rem 0 0 0"}}>Enter the code here</h3>
              <textarea
                id="exampleFormControlTextarea1"
                rows="7"
                className="form-control"
                placeholder="Enter Code..."
                label="Text"
                name="text"
                value={values.text}
                onChange={handleChanges}
                autoFocus
                required
                style={{ marginTop: "1rem" }}
              />
            </div>
            <button
              className="btn btn-info"
              type="submit"
              style={{ marginTop: "5rem" }}
            >
              Explain it!
            </button>
          </form>
        </Grid>
        <Grid item xs={12} sm={8} md={5} elevation={6} >
          <h3 style={{margin:"3.5rem 0 0 0"}}>Explaination</h3>
          <textarea
            id="code"
            style={{ height: "200px", width: "400px" , marginTop:"1rem"}}
            value={code}
            readOnly
          ></textarea>
        </Grid>
      </Grid>
    </>
  );
};

export default Explain;
