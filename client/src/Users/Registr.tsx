import React from 'react';

function gamePage(): JSX.Element {
  return (
    <div>
      <form>
        <input name="name" placeholder="name" type="text" />
        <input name="password" placeholder="password" type="password" />
        <input name="email" placeholder="email" type="text" />
        <button type="submit">registration</button>
      </form>
    </div>
  );
}

export default gamePage;
