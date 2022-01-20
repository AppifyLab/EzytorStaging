import IdGenerator from '../IdGenerator'
import img from '../themes/assets1/images/w1.svg'

function WhyCard({data}) {
    
    return (
        data.map(d=> 
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12" id={d.id}>
            <div className="_why_software_card">
                <div className="_why_software_card_inner">
                    <div className="_why_software_card_top">
                        <img src={img} alt="Icon" className="_why_software_card_ic"/>
                    </div>
                    {/* { console.log("yes is loading component id ", d.id)} */}
                    <div className="_why_software_card_con">
                        <h4 className="_why_software_card_title" style={d.style}>{d.h4}</h4>
                        <p className="_why_software_card_txt">{d.p}</p>
                    </div>
                </div>
            </div>
        </div>
        

          

        )
        
     );
}

export default WhyCard;