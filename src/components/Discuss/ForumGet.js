import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

export default function ForumGet() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    (async () => {
      let posts;
      let token = sessionStorage.getItem("token");
      try {
        let response = await fetch(
          "https://hacknova2.pythonanywhere.com/feed/posts/",
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
      <Grid container className="display">
        <Box ml={5} mr={5} mt={3} pt={3} mb={1} pb={1}>
          <Grid
            container
            spacing={3}
            alignContent="flex-start"
            justify="center"
          >
            {card.map((post, index) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                  <Card
                    sx={{ maxWidth: 345 }}
                    style={{
                      width: "50vh",
                      backgroundColor: "#49ab9480",
                      marginLeft: "170px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="img"
                      height="140"
                      src={post.images_post}
                    />
                    <CardContent>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <h3>Posted by:&nbsp;</h3>
                        <Typography
                          style={{ color: "black" }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {post.owner.username}
                        </Typography>
                      </div>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <h3>Title:&nbsp;</h3>
                        <Typography
                          style={{ color: "black" }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {post.title}
                        </Typography>
                      </div>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <h3>Content:&nbsp;</h3>
                        <Typography
                          style={{ color: "black" }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {post.body}
                        </Typography>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-around",
                        }}
                      >
                        <div>
                            <FavoriteIcon style={{color:"#0A58CA"}}/>
                          <Typography
                            style={{ color: "black" }}
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            {post.like_on_post_count}
                          </Typography>
                        </div>
                        <div>
                          <Link to={{ pathname: "/comments/" + post.id }}>
                            <CommentIcon />
                          </Link>
                          <Typography
                            style={{ color: "black" }}
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            {post.comment_on_post_count}
                          </Typography>
                        </div>
                        <div>
                            <ThumbUpIcon style={{color:"#0A58CA"}}/>
                          <Typography
                            style={{ color: "black" }}
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            {post.votes_on_post}
                          </Typography>
                        </div>
                      </div>
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
}
