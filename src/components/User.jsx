import { useState, useMemo, useEffect } from "react";
import Form from "../Form";
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

      <Form state={{ agreement: false, firstName, lastName }} inputs={state => <>

        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={!state.agreement}
        />
        <input disabled={!state.agreement} value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </>}
      />
    </div>
  );
}
