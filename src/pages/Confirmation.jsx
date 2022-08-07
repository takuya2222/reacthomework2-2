import React from "react";

import { Link } from "react-router-dom";

export const Confirmation = () => {
  return (
    <div>
      <h2>-ご相談内容-</h2>
      <p>{text}</p>
      <div>
        <Link to="/consultation">
          <button>前へ戻る</button>
        </Link>
        <Link to="/">
          <button>送信</button>
        </Link>
      </div>
    </div>
  );
};
