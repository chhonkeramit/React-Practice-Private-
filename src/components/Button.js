import Child from './child'
const Button = props => {
    return(<>
    <Child onMaiBhej={props.onMai} />
    </>)
};

export default Button;