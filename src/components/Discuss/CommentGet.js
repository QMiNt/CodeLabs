import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

const CommentGet = () => {
  const [card, setCard] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      let posts;
      let token = sessionStorage.getItem("token");
      try {
        let response = await fetch(
          `https://hacknova2.pythonanywhere.com/feed/comments/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        posts = await response.json();
        console.log(posts);
      } catch (error) {
        console.log("Error" + error);
        posts = [];
      }
      setCard(posts);
    })();
  }, []);

  return (
    <>
      <Grid
        container
        className="display"
      >
        <Box ml={5} mr={5} mt={3} pt={3} mb={1} pb={1}>
          <Grid
            container
            spacing={3}
            alignContent="flex-start"
            justify="center"
          >
            {card.map((post, index) => {
              return (
                <Grid item xs={12} sm={4} md={4} lg={6} key={index}>
                  <Card
                    sx={{ maxWidth: 345 }}
                    style={{
                      width: "50vh",
                      backgroundColor: "#49ab9480",
                      marginLeft: "170px",
                    }}
                  >
                    <CardContent>
                      <h3>Posted by:</h3>
                      <Typography
                        style={{ color: "black" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {post.owner.username}
                      </Typography>
                      <h3>Solution:</h3>
                      <Typography
                        style={{ color: "black" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {post.body}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default CommentGet;
