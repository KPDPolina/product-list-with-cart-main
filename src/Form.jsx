import { useEffect, useState } from "react"

export default function Form({ state, inputs }) {
    const [formState, setFormState] = useState(state)


    return (
        <form>
            {inputs(formState)}

            <input
                type='checkbox'
                value={formState.agreement}
                onChange={e => {
                    setFormState(prev => ({
                        ...prev,
                        agreement: e.target.checked
                    }))
                }
                }
            />
            {state.firstName && state.lastName && formState.agreement && <div>
                <div>cancel</div>
                <div>submit</div>
            </div>}
        </form>
    )
}