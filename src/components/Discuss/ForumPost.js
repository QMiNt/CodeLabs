import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";

export default function ForumPost() {
  let userid = sessionStorage.getItem("user_id");
  // let token = sessionStorage.getItem("token");
  const [open, setOpen] = React.useState(false);
  // const [images_post, setImages_post] = React.useState(null);

  const [values, setValues] = useState({
    title: "",
    body: "",
    owner: userid,
  });

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        title: data.get("title"),
        body: data.get("body"),
      });
      createpost();
  };

  async function createpost() {
    try {
      let token = sessionStorage.getItem("token");
      let result = await fetch(
        "https://hacknova2.pythonanywhere.com/feed/posts/",
        {
          method: "POST",
          body: JSON.stringify({
            title: values.title,
            body: values.body,
            owner: values.owner,
          }),
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      result = await result.json();
      console.log(result);
    } catch (error) {
      console.log("Error" + error);
    }
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create new post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogActions>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </DialogActions>
        <DialogTitle>Create New Post</DialogTitle>
        <Divider />
        <DialogContent>
          <Grid container>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <div>
                <TextField
                  id="title"
                  name="title"
                  label="Title"
                  onChange={handleChanges}
                  multiline
                />
              </div>
              <div style={{ paddingTop: "1rem" }}>
                <TextField
                  id="body"
                  name="body"
                  label="Content"
                  multiline
                  rows={4}
                  onChange={handleChanges}
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="secondary"
              >
                Post
              </Button>
            </Box>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
