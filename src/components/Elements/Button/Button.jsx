

function Button({ bgcolor, children}) {
    return (
      <button className={`h-10 px-6 font-semibold rounded-md ${bgcolor} text-white`} type="submit">
        {children}
      </button>
    );
  }
  
  export default Button;
  