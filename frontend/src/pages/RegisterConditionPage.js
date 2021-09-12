import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";

const RegisterConditionPage = () => {
    return <AuthTemplate>
        <AuthForm type={'condition'} />
    </AuthTemplate>
}

export default RegisterConditionPage;