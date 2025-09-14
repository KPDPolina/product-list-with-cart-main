import { useState, useMemo, useEffect } from "react";
function str(...r) {
  console.log("invoked str");
  return r.join(" ");
}
export default function User({ count }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = useMemo(
    () => str(firstName, lastName),
    [firstName, lastName]
  );

  // useEffect(() => {
  //   setFirstName('')
  //   setLastName('')
  // }, [count])

  console.log("rerender");

  return (
    <div>
      <h1>{fullName}</h1>

      <form>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </form>
    </div>
  );
}
