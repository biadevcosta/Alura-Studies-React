import React from "react";
import style from './Botao.module.scss';

// interface Props {
//     type?: "button" | "submit" | "reset" | undefined, 
//     onClick?: () => void
//     children?: React.ReactNode
// } 

// function Botao({ onClick, type }: Props) {
//     return (
//         <button onClick={onClick} type={type} className= {style.botao}>
//             {children}
//         </button>
//     )
// }

class Botao extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
    children?: React.ReactNode
}> {
    render(): React.ReactNode {
        const { type = "button", onClick } = this.props
        return(
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.children}
            </button>   
        )
    }
}

export default Botao;