import React, { useContext, useEffect } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import "./All.css";
import { Authcontext } from "../context/Authcontext";

export default function AllProducts() {
  const navigate = useNavigate();
  const { Gdata, setGData, page, setPage } = useContext(Authcontext);

  //   useEffect(() => {
  //     fetch(`http://localhost:3000/products`)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         console.log(json);
  //         setData(json);
  //       });
  //   }, []);
  //   console.log(data);
  return (
    <div>
      <div>
        <button
          style={{
            width: "120px",
            backgroundColor: "orange",
            borderRadius: "40px",
            marginBottom: "10px",
          }}
          onClick={() => {
            let x = Gdata.filter((item) => {
              return item.price < 1000;
            });
            setGData(x);
          }}
        >
          below 1000
        </button>

        <button
          style={{
            width: "120px",
            backgroundColor: "orange",
            borderRadius: "40px",
            marginBottom: "10px",
            marginLeft: "20px",
          }}
          onClick={() => {
            let x = Gdata.filter((item) => {
              return item.price < 10000;
            });
            setGData(x);
          }}
        >
          below 10000
        </button>

        <button
          style={{
            width: "120px",
            backgroundColor: "orange",
            borderRadius: "40px",
            marginBottom: "10px",
            marginLeft: "20px",
          }}
          onClick={() => {
            let x = Gdata.filter((item) => {
              return item.rating > 4;
            });
            setGData(x);
          }}
        >
          rating above 4
        </button>

        <button
          style={{
            width: "120px",
            backgroundColor: "orange",
            borderRadius: "40px",
            marginBottom: "10px",
            marginLeft: "20px",
          }}
          onClick={() => {
            let x = Gdata.filter((item) => {
              return item.price < 100000;
            });
            setGData(x);
          }}
        >
          below 100000
        </button>
      </div>
      <div className="grid">
        {Gdata.map((item) => {
          return (
            <div
              className="childDiv"
              key={item.id}
              // onClick={(item) => {
              //   navigate(`/users/${item.name}`);
              //   console.log(item);
              // }}
            >
              <h4 style={{ fontWeight: "normal", marginLeft: "40%" }}>
                {item.name.substring(0, 10) + "..."}
              </h4>
              <img
                src={item.image1}
                style={{
                  width: "50%",
                  borderRadius: "10px",
                  marginLeft: "25%",
                }}
              />
              <h5
                style={{
                  fontWeight: "bold",
                  marginLeft: "30%",
                  color: "Highlight",
                }}
              >
                Price Rs:{item.price}
              </h5>
              <h5
                style={{
                  fontWeight: "bold",
                  marginLeft: "30%",
                  color: "green",
                }}
              >
                Rating:{item.rating}
              </h5>
              <Link
                to={`/product/${item.name.substring(0, 5)}`}
                style={{ marginLeft: "30%" }}
              >
                more info
              </Link>
              {/* <h4 onClick={()=>{navigate()}}></h4> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
