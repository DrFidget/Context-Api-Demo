import React, { useContext } from "react";
import UserContext from "./context/user/UserContext";

const App = () => {
  const { user, loading, error, fetchUsers } = useContext(UserContext);
  console.log(user);
  return (
    <>
      {!loading && user.length > 0 && (
        <div className="flex flex-col items-center w-full">
          <div className="flex justify-between bg-gray-400 px-10 w-full">
            <div className="underline w-4">ID</div>
            <div className="underline w-1/4">Name</div>
            <div className="underline  w-1/4">UserName</div>
            <div className="underline  w-1/4">Email</div>
          </div>

          {user.map((user, index) => (
            <div
              className="flex justify-between px-10  w-full bg-gray-200"
              key={index}
            >
              <div className=" text-left w-4">{user.id}</div>
              <div className=" text-left w-1/4">{user.name}</div>
              <div className=" text-left w-1/4">{user.username}</div>
              <div className=" text-left  w-1/4">{user.email}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default App;
