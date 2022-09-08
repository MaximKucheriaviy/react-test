import { Component } from "react";
import css from "./loadigScreen.module.scss";
import image from "./pngwing.png"

class LoadigScreen extends Component{
    render(){
        return(
            <div className={css.loadingOverlay}>
                <div className={css.loadingImage}>
                    <img src={image} alt="ПНГ" />
                </div>
            </div>
        )
    }
}

export default LoadigScreen;