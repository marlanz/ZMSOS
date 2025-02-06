import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#FBFBFF",
      }}
    >
      <Header />
      <div style={{ display: "flex", marginTop: "78px" }}>
        <SideBar />
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            marginLeft: "270px",
            marginTop: "20px",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
