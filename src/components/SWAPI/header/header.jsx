import { Component } from "react";
import css from "./header.module.scss";
import svg from "./symbol-defs.svg";
class Header extends Component{
    constructor(props){
        super(props)
        this.hendlerClick = this.hendlerClick.bind(this);
        this.hendlerClickUndoo = this.hendlerClickUndoo.bind(this);
    }
    render(){
        return(
            <header className={css.header}>
                <h1>STAR WARS API</h1>
                <div className={css.navigation}>
                    {this.props.mainState.prewioursPage.length !== 0 && <button onClick={this.hendlerClickUndoo} className={css.homeButton + " " + css.unduButton} type="button">
                        <svg>
                            <use href={`${svg}#icon-undo2`}></use>
                        </svg>
                    </button>
                    }
                    <button onClick={this.hendlerClick} className={css.homeButton} type="button">
                        <svg>
                            <use href={`${svg}#iconhome3`}></use>
                        </svg>
                    </button>
                </div>
                
            </header>
        )
    }
    hendlerClick(){
        this.props.callback({
            pageUrl: null,
            pageType: "main",
            prewioursPage: []
        });
    }
    hendlerClickUndoo(){
        const data = this.props.mainState.prewioursPage[this.props.mainState.prewioursPage.length - 1];
        this.props.callback({
            pageUrl: data.pageUrl,
            pageType: data.pageType,
            prewioursPage: this.props.mainState.prewioursPage.slice(0, this.props.mainState.prewioursPage.length - 1)
        });
    }
}

export default Header;