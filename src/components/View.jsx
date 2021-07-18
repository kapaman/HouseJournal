import React from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Link, useParams
} from "react-router-dom"
import AddView from './AddView';
import bed from '../bed.png'
import bathroom from '../bathtube.png'
import area from '../map.png'



const OverViewDesigned = (props) => {

    if (props.properties == null) return null;
    let selectedProp = props.properties.find(el => el._id == props.id);
    return (
        <div style={{ marginTop: '100px' }}>
            <div style={{ display: 'grid', width: '100%' }}>
                <div className="view" style={{ justifySelf: 'center', width: '72%', padding: '5px 10px 5px 10px', borderRadius: '20px', display: 'flex', border: '0.5px solid #aeaeae', borderImageSlice: 1, borderWidth: '0.5px', lineHeight: 1, textAlign: 'center' }} id="top">
                    <div className="innerView" style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', width: '100%', flex: 1, justifyContent: 'space-between' }}>
                        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0 15px 0 15px' }}>
                            <div style={{ marginTop: '25px' }}>
                                <p className="name" style={{ textAlign: 'left', fontFamily: 'Poppins', fontWeight: 700, fontSize: '22px', marginTop: '15px' }}>{selectedProp.address}
                                </p>
                            </div>
                            <div style={{ marginTop: '15px' }}>
                                <p className="rating" style={{ display: 'flex', alignItems: 'center', fontSize: '18px', margin: '10px', backgroundColor: 'black', fontFamily: '"Poppins"', fontWeight: 400, color: 'white', padding: '0 30px 0 30px', borderRadius: '10px', lineHeight: '1.5' }}>{selectedProp.stars}<svg style={{ marginLeft: '4px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg></p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', textAlign: 'space-between', justifyContent: 'space-between', marginTop: '15px', alignItems: 'center' }}>
                            <div className="desc" style={{ width: 'inherit', margin: '0 15px 0 15px', textAlign: 'left' }}>
                                <p className="description" style={{ fontFamily: 'Poppins', alignItems: 'center', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr auto', fontSize: '16px', columnGap: '4px', fontWeight: 200, lineHeight: '1.5' }}>
                                    <img height={24} width={24} src={bed}></img> <p>{selectedProp.beds}</p> <img height={28} width={28} src={bathroom}></img> <p>{selectedProp.bathrooms}</p> <img height={24} width={24} src={area}></img> <p>{selectedProp.area} sqft</p>
                                </p>
                            </div>
                            <div style={{ marginRight: '25px' }}>
                                <span style={{ fontFamily: '"IBM Plex Mono"', fontWeight: 600, fontSize: '18px' }}>{selectedProp.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}



// const OverView = (props) => {
//     console.log("from overview", props);
//     if (props.properties == null) return null;
//     let selectedProp = props.properties.find(el => el._id == props.id);
//     return (
//         <div style={{ backgroundColor: 'white', border: '2px solid black', paddingLeft: '20px', paddingBottom: '20px', marginLeft: '4%', marginRight: '4%' }}>
//             <h1>{selectedProp.address}</h1>
//             <p>{selectedProp.stars}</p>
//             <div>beds {selectedProp.beds} bathrooms {selectedProp.bathrooms} area {selectedProp.area} sqft  Price: {selectedProp.price}</div>

//         </div>
//     )
// }

const Parts = (props) => {


    return (
        <div className="view" id="viewId" style={{ display: 'flex', border: '0px transparent', borderImageSlice: 1, borderWidth: '0.5px', borderImageSource: 'linear-gradient(to bottom, white, rgba(0, 0, 0, 0.4))', lineHeight: 1, textAlign: 'center', width: '35%', fontSize: '30px', borderRadius: '23px', backgroundColor: 'white', padding: '1.0px', backgroundImage: 'linear-gradient(white, white), linear-gradient(#fff, #8b8b8b)', backgroundOrigin: 'border-box', backgroundClip: 'content-box, border-box' }}>
            <img class="img" src={props.src} style={{ alignSelf: 'center', borderRadius: '50%', margin: '12px 0px 12px 10px', height: '100px', width: '100px', boxShadow: '1.08px 1.4px 8.6px -2.1px black' }} />
            <div className="innerView" style={{ marginLeft: '5px', marginRight: '5px', display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', width: '100%', flex: 1 }}>
                <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0 15px 0 15px' }}>
                    <div >
                        <p className="name" id="viewIdName" style={{ textAlign: 'left', fontFamily: 'Poppins', fontSize: '18px', fontWeight: 500, marginTop: '15px', marginBottom: '0' }}>{props.title.charAt(0).toUpperCase() + props.title.slice(1)}</p>
                    </div>
                    <div>
                        <p className="rating" style={{ alignItems: "center",
                        display: "grid",
gridTemplateColumns:" 1fr 1fr", fontSize: '16px', margin: '10px', backgroundColor: 'black', fontFamily: '"Poppins"', fontWeight: 400, color: 'white', padding: '0 30px 0 30px', borderRadius: '10px', lineHeight: '1.5', textAlign: 'center' }}>{props.stars}<svg style={{ marginLeft: '4px' }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg></p>
                </div>
            </div>
            <div className="desc" style={{ width: '100%', margin: '0 15px 0 15px', textAlign: 'left', marginTop: ' 5px' }}>
                <p className="description" style={{ color: '#464646', width: 'calc(100% - 30px)', fontFamily: 'Poppins', fontSize: '15px', marginTop: '0px', fontWeight: 200, lineHeight: '1.5' }}>
                    {props.description}
                </p>
            </div>
        </div>
        </div >
    )

return (
    <div>
        <div className="flex-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'white' }}>

        </div>
    </div>

)




    // return <div style={{ justifySelf: 'center', marginBottom: '20px', border: '1px solid black', backgroundColor: 'white', padding: '20px', borderRadius: '20px', width: "600px" }}>
    //     <img src={props.src} style={{ height: 200, width: 200, borderRadius: '10px' }}></img>
    //     <h1>{props.title.charAt(0).toUpperCase() + props.title.slice(1)}</h1>
    //     <p> {props.stars} starsssssssss</p>
    //     <p>{props.description}</p>
    // </div>
}

const PartView = (props) => {
    if (props.properties == null) {
        return <p>Loading...</p>
    }
    let sortedParts = ((props.properties.find(el => el._id == props.id).parts));
    sortedParts.sort((a, b) => {
        return b.rating - a.rating
    });
    return (
        <div className="flex-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'white', rowGap: '25px', columnGap: '50px', marginTop: '30px', marginBottom: '30px' }}>

            {sortedParts.length > 0 && sortedParts.map((el, i) => <Parts key={i} src={el.img} description={el.description} stars={el.rating} title={el.name}></Parts>)}
            {sortedParts.length == 0 && <p style={{ marginTop: '50px' }}>No views to show... Start adding Views</p>}
        </div>
    )
}
const AllViews = (props) => {
    console.log("props from overview", props);
    const id = useParams().id
    console.log(id);
    return (
        <>  <OverViewDesigned id={id} properties={props.properties.length > 0 ? props.properties : null}></OverViewDesigned>
            {/* <OverView id={id} properties={props.properties.length > 0 ? props.properties : null}></OverView> */}
            <PartView id={id} properties={props.properties.length > 0 ? props.properties : null}></PartView>
            <AddView show={props.show} setShow={props.setShow} views={props.views.length > 0 ? props.views : null} properties={props.properties.length > 0 ? props.properties : null} setProperties={props.setProperties.length > 0 ? props.setProperties : null} setViews={props.setViews ? props.setViews : null}></AddView>
        </>
    )
}

export default AllViews;