/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
const GRADIENT_TYPE = [
    'linear-gradient',
    'radial-gradient',
    'repeating-linear-gradient',
    'repeating-radial-gradient',
    'conic-gradient'
];
const STYLE ={
    inputs:{
        width: '200px'
    }
};
function Settings(props) {
    return (
            <div className="container has-text-centered">
                <h1 className="title">
                    Settings
                </h1>
                <h6 className="subtitle" style={{ whiteSpace: 'nowrap',width: '300px',overflow: 'hidden',textOverflow: 'ellipsis'}}>
                    {props.colors.map((value, index, array) => <span key={`${index}`}><span style={{ color: value }}>{value}</span>{(array.length === index + 1) ? "." : ","}</span>)}
                </h6>
    
                    <div className="field has-addons">
                        <div className="control ">
                            <input id="noc" style={STYLE.inputs} name="count" min="2" max="1000" className="input" type="number" placeholder={"Current count is "+props.count} onChange={props.handleChange} />
                        </div>
                        <div className="control">
                            <button  className="button" onClick={props.submitCount} disabled={props.count>1?false:true}>
                                Set
                            </button>
                        </div>
                    </div>
                <div className="field">
                <div className="control ">
                <div className="select" >
                    <select name="type" id="tog" onChange={props.handleSelect}>
                        <option value={props.currentType} >{props.currentType}</option>
                        {(GRADIENT_TYPE.filter((value1)=>value1!==props.currentType)).map((value)=><option key={value} value={value}>{value}</option>)}
                    </select>
                </div>
                </div>    
                </div>
                <div className="field">
                <div className="control ">
                    <input type="color" name="colorpicker" id="cpi" onChange={props.handleColor}/>
                    <h4>
                    {props.currentSeed!==null?<span style={{color: "#"+props.currentSeed }}>{props.currentSeed!==""?"#"+props.currentSeed:""}</span>:""}
                    </h4>
                    <div className="is-size-7">Provide a seed color.</div>

                </div>    
                </div>
                <div className="field">
                <div className="control">
                        <label className="checkbox">
                            <input type="checkbox" />
                             Color Interactivity
                            </label>
                            <div className="is-size-7">If you touch the box, colors will change.</div>
                </div>    
                </div>
            </div>
      
    );
}

export default Settings;
