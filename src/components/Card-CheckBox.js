import {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CardCheckBox = ({filter, obj}) => {
    const [isHidden, setIsHidden] = useState(false);
    const [showMore, setShowMore] = useState(true);
    const hiddenList = () => {
        setIsHidden(!isHidden)
    }
    const show= ()=>{
        setShowMore(!showMore)
    }
    return <>
        <div className='accordion-container'>
            <div className="accordion-header" onClick={hiddenList} >
                <div><p>{obj}</p></div>
                <div>{isHidden ? <AddIcon className='icon'/> : <RemoveIcon className='icon'/>}</div>
            </div>
            {!isHidden && (<>
                <div className='accordion-box'>
                    {filter && filter[obj] && filter[obj].length > 0 &&
                        filter[obj].slice(0, 5).map((item, index) =>
                            <div><input type={"checkbox"}
                                        id={item.name}
                                        key={index}
                                        name={item.name}/>
                                <label htmlFor="">{item.name}</label>
                            </div>)}
                </div>
                {filter && filter[obj] && filter[obj].length > 5 && (<>
                    {!showMore && (
                        <div className='accordion-box'>
                            {filter && filter[obj] && filter[obj].length > 0 &&
                                filter[obj].slice(5).map((item, index) =>
                                    <div><input type={"checkbox"}
                                                id={item.name}
                                                key={index}
                                                name={item.name}/>
                                        <label htmlFor="">{item.name}</label>
                                    </div>)}
                        </div>
                    )}
                    <br/>
                    <div className='accordion-view-more-header' style={{color:'#53565a'}} onClick={show}>
                        <div>{showMore ? 'View More' : 'View Less'}</div>
                        <div>{showMore ? <AddIcon className='icon'/> : <RemoveIcon className='icon'/>}</div>
                    </div>
                </>)}
            </>)}
            <br/>
            <hr/>
        </div>
    </>
}
export default CardCheckBox