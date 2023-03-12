import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot,faSun ,faDroplet,faCloudMoon} from "@fortawesome/free-solid-svg-icons";

library.add(faLocationDot,faSun,faDroplet,faCloudMoon);

const Weather = (props) =>  {
        return (
            <div className="info ">
                <div className="flex">

                    { props.city && 
                    <h4 className="city">
                        <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                        &nbsp;
                        {props.city} | {props.country} <hr></hr>
                    </h4>
                    } 

                    { props.Temperature && 
                    <p className="info_key">
                        <div> <FontAwesomeIcon icon="fas fa-sun"  /></div>
                        <div className="info_value">&nbsp;&nbsp; {`${Math.floor(props?.Temperature )}°C`} Temperature</div>
                    </p>
                    }

                    { props.humidity && 
                    <p className="info_key">
                        <FontAwesomeIcon icon="fa-solid fa-droplet" />
                        <div className="info_value">&nbsp;&nbsp;  {props.humidity }% Humidity </div>
                    </p>
                    }

                    { props.description && 
                    <p className="info_key">
                        <FontAwesomeIcon icon="fa-solid fa-cloud-moon" />
                        <div className="info_value">&nbsp;&nbsp;{props.description} &nbsp;&nbsp;Description </div>
                    </p>
                    }

                    { props.error && <p className="error"> {props.error}</p> }

                    
                </div>  
            </div>
        );
}

export default Weather;