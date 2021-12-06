import React, { useEffect, useRef, useState } from "react";
import Details from "./Details";
import TitleBar from "./TitleBar";

export default function Main() {
  const [data, setData] = useState(null);
  const titleRef = useRef();
//   console.log(data);
  useEffect(
    () =>
      !data &&
      fetch("https://www.mohfw.gov.in/data/datanew.json")
        .then((res) => res.json())
        .then((res) =>
          setData([
            { ...res.find((el) => el.sno === "11111") },
            ...res.filter((el) => el.sno !== "11111"),
          ])
        )
        .catch((err) => alert(err)),
    [data]
  );
  return (
    <div>
      <TitleBar ref={titleRef} data={data || []} />
      <div
        style={{
          height: titleRef.current?.getBoundingClientRect()?.height || 0,
        }}
      />
      {data ? (
        <>
          {data.map((el) => (
            <Details key={el.sno} stateData={el} />
          ))}
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
