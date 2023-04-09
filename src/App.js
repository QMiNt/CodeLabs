import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import LoginSignupHeader from "./components/UI/LoginSignupHeader";
import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";
import Build from "./pages/Build";
import Discussion from "./pages/Discussion";
import Visualize from "./pages/Visualize";

import Explain from "./components/Explain/Explain";

import Contests from "./pages/Contests";

// import alanBtn from "@alan-ai/alan-sdk-web";

import Seive from "./components/Visualize/VizAlgorithms/primeComponents/seive";
import Queen from "./components/Visualize/VizAlgorithms/queenComponents/queen";
import BinarySearch from "./components/Visualize/VizAlgorithms/binarySearchComponent/binarySearch";
import Pathfinder from "./components/Visualize/VizAlgorithms/pathfinderComponents/pathfinder";
import Sort from "./components/Visualize/VizAlgorithms/sortComponents/sort";
import ConvexHull from "./components/Visualize/VizAlgorithms/convexHullComponents/convexHull";
import RecursiveSort from "./components/Visualize/VizAlgorithms/recursiveSortComponents/recursiveSort";
import TuringMachine from "./components/Visualize/VizAlgorithms/Turing Machine/turingMachine";
import Puzzle from "./components/Visualize/VizAlgorithms/15puzzleComponents/puzzle";
import Graph from "./components/Visualize/VizAlgorithms/Graph/graph";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CommentGet from "./components/Discuss/CommentGet";
// import CommentPost from "./components/Discuss/CommentPost";
import Analyze from "./pages/Analyze";
// import Test from "./components/UI/Test";
function App() {

  return (
    <div className="App">
      <Router>
        
        <ScrollToTop />
        <Routes>
          {/* <Route path="/login" element={<><LoginSignupHeader/><Login /></>} /> */}
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/home" element={<><Header /><Home /></>} />
          <Route path="/profile" element={<><Header /><Profile /></>} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/build" element={<><Header /><Build /></>} />
          <Route path="/visualize" element={<><Header /><Visualize /></>} />
          <Route path="/visualize/prime" element={<><Header /><Seive /></>} />
          <Route path="/visualize/nqueens" element={<><Header /><Queen /></>} />
          <Route path="/visualize/pathfinder" element={<><Header /><Pathfinder /></>} />
          <Route path="/visualize/sort" element={<><Header /><Sort /></>} />
          <Route path="/visualize/convexhull" element={<><Header /><ConvexHull /></>} />
          <Route path="/visualize/binarysearch" element={<><Header /><BinarySearch /></>} />
          <Route path="/visualize/recursivesort" element={<><Header /><RecursiveSort /></>} />
          <Route path="/visualize/turing" element={<><Header /><TuringMachine /></>} />
          <Route path="/visualize/puzzle" element={<><Header /><Puzzle /></>} />
          <Route path="/visualize/graph" element={<><Header /><Graph /></>} />
          {/* <Route path="/discuss" element={<><Header /><Discussion /></>} /> */}
          {/* <Route path="/test" element={<><Test/></>} /> */}
          

          <Route path="/explain" element={<><Header /><Explain /></>} />
          <Route path="/contests" element={<><Header /><Contests /></>} />
          <Route path="/analyze" element={<><Header /><Analyze /></>} />
          <Route path="/explain" element={<><Header /><Explain /></>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
