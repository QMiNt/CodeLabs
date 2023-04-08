import React, { useEffect, useState } from "react";

const Contests = () => {
  const [value, setValue] = useState("all");
  const [checked, setChecked] = useState(false);
  const [contest, setContest] = useState([]);

  function handleChange(e) {
    if (e.target.value === "none") {
      setValue("all");
    } else {
      setValue(e.target.value);
    }
    console.log(e.target.value);
  }
  function handleCheck(e) {
    setChecked(!checked);
  }

  useEffect(() => {
    fetch(`https://kontests.net/api/v1/${value}`)
      .then((response) => response.json())
      .then((data) => {
        setContest(data);
      })
      .catch((error) => console.error(error));
  }, [value, checked]);

  const GetContests = () => {
    return (
      <>
        {contest.map((c, index) => {
          return checked ? (
            c.in_24_hours === "Yes" && (
              <tr key={index}>
                <td>
                  <a href={c.url} target="_blank" rel="noreferrer">
                    {c.name}
                  </a>
                  ;
                </td>
                <td>{c.start_time}</td>
                <td>{c.end_time}</td>
                {c.site && <td>{c.site}</td>}
                <td>{c.in_24_hours}</td>
              </tr>
            )
          ) : (
            <tr key={index}>
              <td>
                <a href={c.url} target="_blank" rel="noreferrer">
                  {c.name}
                </a>
                ;
              </td>
              <td>{c.start_time}</td>
              <td>{c.end_time}</td>
              {c.site && <td>{c.site}</td>}
              <td>{c.in_24_hours}</td>
            </tr>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="form-group">
        <select
          placeholder="Select Platform"
          onChange={handleChange}
          value={value}
          className="form-control"
        >
          <option value="hacker_rank">HackerRank</option>
          <option value="hacker_earth">HackerEarth</option>
          <option value="code_chef">CodeChef</option>
          <option value="leet_code">LeetCode</option>
          <option value="at_coder">AtCoder</option>
          <option value="codeforces">CodeForces</option>
          <option value="top_coder">TopCoder</option>
          <option value="kick_start">Kick Start</option>
          <option value="none">None</option>
        </select>
        <input
          type="checkbox"
          className="form-check-input my-4 ms-4"
          isChecked={checked}
          onChange={handleCheck}
        />
        <label className="my-4 mx-2">In 24 hours?</label>
      </div>
      <div>
        <div className="table-responsive">
          <table className="table table-striped table-bordered zero-configuration">
            <thead>
              <tr>
                <th>Name</th>
                <th>Start</th>
                <th>End</th>
                {value === "all" && <th>Site</th>}
                <th>In 24 hours</th>
              </tr>
            </thead>
            <tbody>
              <GetContests />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contests;
