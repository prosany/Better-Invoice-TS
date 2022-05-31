import React from "react";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

const axiosLoader = (url: string) => axios.get(url).then((res) => res.data);
const baseUrl = "http://localhost:8060/users";

const InstantUpdate = () => {
  const [user, setUser] = React.useState({ name: "", age: 0 });
  const { mutate } = useSWRConfig();

  // Fetch Data and Cache it
  const { data, error } = useSWR(baseUrl, axiosLoader);
  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
  };

  // Create a new user
  const craeteUser = async () => {
    mutate(baseUrl, [...data, user], false);
    await axios.post(baseUrl, user);
    setUser({ name: "", age: 0 });
    mutate(baseUrl);
  };

  // Delete a User
  const deleteUser = async (id: number) => {
    mutate(
      baseUrl,
      data.filter((user: { id: number }) => user.id !== id),
      false
    );
    await axios.delete(baseUrl + `/${id}`);
  };
  return (
    <React.Fragment>
      Data: {data.length <= 0 && "No Data"}
      {data?.map(
        (usr: { name: string; age: string; id: number }, idx: number) => (
          <div key={idx}>
            {idx + 1} - Name: {usr?.name} - Age: {usr?.age} -{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => deleteUser(usr.id)}
            >
              x
            </span>
          </div>
        )
      )}
      <br />
      <br />
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Name"
        value={user.name || ""}
      />
      <br />
      <input
        type="text"
        name="age"
        onChange={handleChange}
        placeholder="Age"
        value={user.age || ""}
      />
      <br />
      <button onClick={craeteUser}>Add User</button>
    </React.Fragment>
  );
};

export default InstantUpdate;
