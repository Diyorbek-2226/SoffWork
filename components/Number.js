import Link from 'next/link';
import React from 'react';

function Number(props) {
    return (<div className=' my-3 '>
         <div className='container'>
            <aside className="blog__sidebar ">
    <div className="single__widget ">
        <ul className="widget__body categories">
            <li>
                <Link  legacyBehavior href="/blog">
                  <a><p>Sotuvchining reytingi</p> <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" height="20px" fill="currentColor">
  <path d="M316.7 17.8c-4.5-9.2-17.9-9.2-22.4 0l-65.5 134.6-148.6 21.6c-10.2 1.5-14.3 14-6.9 21.4l107.6 104.8-25.4 148.2c-1.7 10.1 8.9 17.8 18 13l133.1-70 133.1 70c9.1 4.8 19.7-2.9 18-13l-25.4-148.2 107.6-104.8c7.4-7.4 3.3-19.9-6.9-21.4l-148.6-21.6-65.5-134.6z"/>
</svg>
</span></a>
                </Link>
            </li>
            <li>
                <Link  legacyBehavior href="/blog">
                  <a><p>Tugallangan buyurtmalar</p> <span>375</span></a>
                </Link>
            </li>
            <li>
                <Link  legacyBehavior href="/blog">
                  <a><p>Jami 118 sharh</p> <span className="d-flex align-items-center pe-4"><span className="text-primary">114</span> <span className="text-danger">4</span></span></a>
                </Link>
            </li>
            <li>
                <Link  legacyBehavior href="/blog">
                  <a><p>Buyurtmalar bajarilmoqda</p> <span>0</span></a>
                </Link>  
            </li>
            <hr className="widget__body categories"/>
            
           
        </ul>
    </div>
   
</aside>
        </div>
    </div>

    );
}

export default Number;