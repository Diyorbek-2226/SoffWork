import React from 'react';
import Link from 'next/link';

const HTSellerItem = ({ username }) => {
  return (
    <div className="seller-item">
      <Link href="/">
        <h5 className="seller-name">{username}</h5>
      </Link>
    </div>
  );
};

export default HTSellerItem;

