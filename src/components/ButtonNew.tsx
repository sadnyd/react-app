import { useState } from "react";
interface Props {
  btText: string;
}

function ButtonNew({ btText }: Props) {
  const [count, setCount] = useState(-1);
  return (
    <>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => {
          setCount(+1);
        }}
      >
        {btText} {count}
      </button>
    </>
  );
}

export default ButtonNew;
