import React from 'react';

function DropdownAccount() {
  return (
    <ul
      aria-labelledby="dropdownDefault"
      className="dropdown-menu w-[120px] absolute bg-white right-[-5px] p-5 shadow-lg rounded-[5px]"
    >
      <li>logout</li>
    </ul>
  );
}

export default DropdownAccount;
