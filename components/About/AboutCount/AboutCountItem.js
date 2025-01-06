
const AboutCountItem=(props)=>{
    const set=['SoffKwork','active kworks','new kworks this week','new buyers this week']
return(
<div className="single_counter__box">
<h2 className="mt-1 mb-1">{props.price}</h2>
    <span><img src={props.image} alt=""/> active kworks</span>
   
</div>
)
}
export default AboutCountItem