import { useState } from "react"
import ActivityFilterItem from "./ActivityFilter/ActivityFilterItem"

const ActivityTabFilter=()=>{
const [Tab,setTab] = useState('all')

// change tab

function ChangeTab(tab){
  try{
   let alltabs = document.querySelectorAll('#act_tab_content .act_tab')
   alltabs.forEach(list=>{
     list.classList.remove('show')
     list.classList.remove('active')
   })
   let cu_tab = document.querySelector(`#act_tab_content .${tab}`)
   cu_tab.classList.add('active')
   setTimeout(()=>{
    cu_tab.classList.add('show')
   },100)
   setTab(tab)
  }catch(err){}
}

return(
<div className="activity_grid_style bg-body-2 section_gap_y_bottom__1">
<div className="container">

<div className="row nft_grid__header px-0 align-content-center">
    <div className="col-lg-12">
    <ul className="nav nav-pills pills-default" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation" onClick={e=>ChangeTab('all')}>
            <button className={`nav-link ${Tab==='all'?'active':''} `} id="pills-tab-one" data-bs-toggle="pill" data-bs-target="#pills-one" type="button" role="tab" aria-controls="pills-one" aria-selected="true">All</button>
        </li>
        <li className="nav-item" role="presentation" onClick={e=>ChangeTab('art')}>
            <button className={`nav-link ${Tab==='art'?'active':''} `} id="pills-tab-two" data-bs-toggle="pill" data-bs-target="#pills-two" type="button" role="tab" aria-controls="pills-two" aria-selected="false">Art</button>
        </li>
        <li className="nav-item" role="presentation" onClick={e=>ChangeTab('virtual')}>
            <button className={`nav-link ${Tab==='virtual'?'active':''} `} id="pills-tab-three" data-bs-toggle="pill" data-bs-target="#pills-three" type="button" role="tab" aria-controls="pills-three" aria-selected="false">Virtual Words</button>
        </li>
        <li className="nav-item" role="presentation" onClick={e=>ChangeTab('tranding')}>
            <button className={`nav-link ${Tab==='tranding'?'active':''} `} id="pills-tab-four" data-bs-toggle="pill" data-bs-target="#pills-four" type="button" role="tab" aria-controls="pills-four" aria-selected="false">Trending Cards</button>
        </li>
    </ul>
    </div>
</div>

<div className="row pt-40 gy-4">
    <div className="col-lg-7 gx-lg-5">
        <div className="tab-content" id="act_tab_content">
            <div className="tab-pane fade act_tab all show active">
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="liked by"
                  username="@Pizza Game Chef"
                  image="/images/nft/nf-sm-one.png"
                  icon="/images/icons/status-heart-x.svg"
                  time="3 hours ago"
                />
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="started following"
                  username="@Desmond Eagle"
                  image="/images/nft/nf-sm-two.png"
                  icon="/images/icons/status-tick-x.svg"
                  time="3 hours ago"
                />
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="bid cancelled by"
                  username="@Weir"  
                  image="/images/nft/nf-sm-three.png"
                  icon="/images/icons/status-bid-x.svg"
                  time="3 hours ago"
                />
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="1 edition purchased by"
                  username="Eric Widget"
                  image="/images/nft/nf-sm-four.png"
                  icon="/images/icons/status-cart-x.svg"
                  time="3 hours ago"
                />
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="listed by"
                  username="@Norman Gordon"
                  image="/images/nft/nf-sm-five.png"
                  icon="/images/icons/status-pin-x.svg"
                  time="3 hours ago"
                />
            </div>
            <div className="tab-pane fade act_tab art">
               <ActivityFilterItem
                  title="Sound of Silence"
                  action="bid cancelled by"
                  username="@Weir"  
                  image="/images/nft/nf-sm-three.png"
                  icon="/images/icons/status-bid-x.svg"
                  time="3 hours ago"
                />
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="1 edition purchased by"
                  username="Eric Widget"
                  image="/images/nft/nf-sm-four.png"
                  icon="/images/icons/status-cart-x.svg"
                  time="3 hours ago"
                />
            </div>
            <div className="tab-pane fade act_tab virtual">
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="1 edition purchased by"
                  username="Eric Widget"
                  image="/images/nft/nf-sm-four.png"
                  icon="/images/icons/status-cart-x.svg"
                  time="3 hours ago"
                />
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="listed by"
                  username="@Norman Gordon"
                  image="/images/nft/nf-sm-five.png"
                  icon="/images/icons/status-pin-x.svg"
                  time="3 hours ago"
                /> 
            </div>
            <div className="tab-pane fade act_tab tranding">
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="started following"
                  username="@Desmond Eagle"
                  image="/images/nft/nf-sm-two.png"
                  icon="/images/icons/status-tick-x.svg"
                  time="3 hours ago"
                />
                <ActivityFilterItem
                  title="Sound of Silence"
                  action="bid cancelled by"
                  username="@Weir"  
                  image="/images/nft/nf-sm-three.png"
                  icon="/images/icons/status-bid-x.svg"
                  time="3 hours ago"
                />
            </div>
        </div>
    </div>
    
</div>
</div>
</div>
)
}
export default ActivityTabFilter