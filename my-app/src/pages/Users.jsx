import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
const getData = (page) => {
  return fetch(`https://reqres.in/api/users?page=${page}`).then((res) =>
    res.json()
  );
};
const getpagenumber = (val) => {
  let pageNumber = Number(val);
  if (typeof pageNumber !== "number") {
    pageNumber = 1;
  }
  return pageNumber;
};
const Users = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  let [searchParams, setSearchParams] = useSearchParams();
  const pageval = getpagenumber(searchParams.get("page"));
  const [page, setPage] = useState(pageval);
  const navigate = useNavigate();

  const fethAndupdateData = (page) => {
    setLoading(true);
    getData(page)
      .then((data) => {
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
    fethAndupdateData(page);
  }, [page]);

  //searchparams
  useEffect(() => {
    setSearchParams({ page: page });
  }, [page]);
  console.log(data);

  const handlepage = (val) => {
    const changed = page + val;
    setPage(changed);
  };
  console.log(searchParams.get("page"));
  return loading ? (
    <h1>..loading</h1>
  ) : err ? (
    <h1>..err</h1>
  ) : (
    <>
      <button onClick={() => navigate("/")}>go to home useNavigate </button>
      <Link to="/">go to home usi link</Link>
      <h1>users</h1>
      {data?.data?.map((user) => (
        <div key={user.id}>
          <img src={user.avatar} alt={user.first_name} />
          <p>
            Name:{user.first_name}
            {user.last_name}
          </p>
          <Link to={`/users/${user.id}`}>more info</Link>
        </div>
      ))}
      <button disabled={page < 2} onClick={() => handlepage(-1)}>
        perv
      </button>
      <button>{page}</button>
      <button onClick={() => handlepage(1)}>next</button>
    </>
  );
};
export default Users;
