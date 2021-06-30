import React from "react";

function Hello() {
  const [data, setData] = React.useState(null);


  React.useEffect(() => {
    fetch("/yachna")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
        <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}


export default Hello;