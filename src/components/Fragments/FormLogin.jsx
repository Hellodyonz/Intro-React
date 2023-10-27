import Button from "../Elements/Button/button"
import InputForm from "../Elements/input"

function FormLogin(){
    return(
        <>
        <form>
          <InputForm label="Email" placeholder="example@mail.com" name="email"/>
          <InputForm label="Password" placeholder="Enter Password" name="password"/>
          <Button bgcolor="bg-blue-500 w-full">Login</Button>
        </form>
        </>
    )
}

export default FormLogin