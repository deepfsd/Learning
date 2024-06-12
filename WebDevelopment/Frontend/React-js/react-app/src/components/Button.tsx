interface props {
    onClick: () => void;
    color?: 'primary' | 'secondary' | 'danger';
}

const Button = ({ onClick, color = 'primary' }: props) => {
    return (
        <button className={'btn btn-' + color} onClick={onClick}>Button</button>
    )
}

export default Button           