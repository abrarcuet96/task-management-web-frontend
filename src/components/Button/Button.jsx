import './Button.css'
const Button = ({buttonName}) => {
    return (
        <button className="glowOnHover df">
            <p className='text-sm font-semibold lg:text-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text'>{buttonName}</p>
        </button>
    );
};

export default Button;