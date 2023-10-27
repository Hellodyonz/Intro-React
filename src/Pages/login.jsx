import FormLogin from "../components/Fragments/FormLogin"
import AuthLayout from "../components/Layouts/AuthLayouts"


function LoginPage(){
    return(
        <>
            <AuthLayout title="Login">
                <FormLogin/>
            </AuthLayout>
        </>
    )
}

export default LoginPage