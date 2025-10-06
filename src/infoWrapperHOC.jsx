import { useState } from 'react'

function infoWrapperHOC(Comp) {
  return function NewComp(props) {

    const [show, setShow] = useState(false)
    const { title, description = '', ...rest } = props;
    return (
      <div
        style={{ position: "relative" }}
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}

      >
        <Comp {...rest} />
        {show && <div
          style={{
            position: "absolute",
            backgroundColor: "rgb(200,200,200)",
            zIndex: 40,
            top: '-50px',
            right: '-50px'
          }}
        >
          <div style={{ fontWeight: "bold" }}>{title}</div>
          <div> {description}</div>
        </div>}
      </div>
    );
  };
}

export default infoWrapperHOC;
