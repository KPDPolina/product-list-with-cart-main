import { useState } from "react";
import useDate from "../hooks/useDate";


export default function Header() {
    const [date, setDate] = useState("2025-10-12");
    const [offset, setOffset] = useState(5);
    const [offset_unit, setOffsetUnit] = useState("days");
    console.log('rendered header')

    const start = useDate({ date, offset, offset_unit });
    const end = useDate({ date: start, offset: 40, offset_unit: 'weeks' });

    return (
        <section>
            <div>
                Date {date} after {offset} {offset_unit} will be {start}

            </div>
            <div>delivery: {end}</div>

            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input value={offset} onChange={(e) => setOffset(+e.target.value)} />
            <select
                value={offset_unit}
                onChange={(e) => setOffsetUnit(e.target.value)}
            >
                {["days", "weeks", "months"].map((op) => (
                    <option key={op} value={op}>
                        {op}
                    </option>
                ))}
            </select>
        </section>
    );
}
