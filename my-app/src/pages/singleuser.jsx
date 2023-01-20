import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const getData = (id) => {
  return fetch(`https://reqres.in/api/users/${id}`).then((res) => res.json());
};

function Singleuser() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  let params = useParams();
  //console.log("hip", params);
  const fethAndupdateData = () => {
    setLoading(true);
    getData(params.user_id)
      .then((data) => {
        //console.log(data);
        setData(data);
      })
      .catch((err) => {
        setErr(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fethAndupdateData();
  }, []);
  //console.log(data);
  return loading ? (
    <h1>..loading</h1>
  ) : err ? (
    <h1>..err</h1>
  ) : (
    <div style={{ margin: "25px", border: "1px solid black" }}>
      <img src={data?.data?.avatar} alt={data?.data?.name} />
      <h5>
        Name:{data?.data?.first_name}
        {data?.data?.last_name}
      </h5>
      <p>{data?.support?.url}</p>
      <p>{data?.support?.text}</p>
    </div>
  );
}
export default Singleuser;
