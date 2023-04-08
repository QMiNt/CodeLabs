import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import badge1 from "../images/badge1.png";
import badge2 from "../images/badge2.png";
import badge3 from "../images/badge3.png";

const Profile = () => {
  const data = [
    {
      name: "Quiz 1",
      Score: 3,
    },
    {
      name: "Quiz 2",
      Score: 3,
    },
    {
      name: "Quiz 3",
      Score: 2,
    },
    {
      name: "Quiz 4",
      Score: 1,
    },
    {
      name: "Quiz 5",
      Score: 1,
    },
    {
      name: "Quiz 6",
      Score: 1,
    },
    {
      name: "Quiz 7",
      Score: 2,
    },
  ];
  const barColors = ["#92A3FD", "#C58BF2"];

  const [card, setCard] = useState([]);
  let token = sessionStorage.getItem("token");
  useEffect(() => {
    (async () => {
      let profile_info;
      try {
        let response = await fetch(
          "https://hacknova2.pythonanywhere.com/login/profilecreate/",
          {
            method: "GET",
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        profile_info = await response.json();
        console.log(profile_info);
      } catch (error) {
        console.log("Error" + error);
        profile_info = [];
      }
      setCard(profile_info);
    })();
  }, [token]);
  console.log(card);

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-xl-3">
              <div className="pricing-item-regular">
                {card.map((post, index) => {
                  return (
                    <div>
                      <span className="price">
                        <img src={badge2} alt="" />
                      </span>
                      <h4>{post.name}</h4>
                      <div className="icon">
                        <img src={post.profile_pic} alt="" />
                      </div>
                      <ul>
                        <li>{post.about}</li>
                        <li>{post.interests}</li>
                        <li>{post.education}</li>
                        <li>{post.designation}</li>
                        <li>{post.email}</li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body profile-card">
                  <div>
                    <h4>Contributor</h4>
                    <img src={badge1} alt=""/>
                  </div>
                  <div>
                    <h4>Expert</h4>
                    <img src={badge2} alt=""/>
                  </div>
                  <div>
                    <h4>Grand Master</h4>
                    <img src={badge3} alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-xl-9 bar-chart">
              <BarChart
                width={700}
                height={300}
                data={data}
                barCategoryGap={15}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                padding={{
                  right: 30,
                  left: 20,
                }}
              >
                <defs>
                  <linearGradient
                    id="colorUv"
                    x1="100%"
                    y1="100%"
                    x2="0%"
                    y2="100%"
                    spreadMethod="reflect"
                  >
                    <stop offset="0" stopColor="#C58BF2" />
                    <stop offset="1" stopColor="#EEA4CE" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="name" />
                <YAxis dataKey="Score" />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Score"
                  radius={[20, 20, 20, 20]}
                >
                  {data.map((index) => (
                    <Cell key={`cell-${index}`} fill={barColors[index % 2]} />
                  ))}
                </Bar>
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
