import RegisterForm from "../Auth/RegisterForm";
import AuthCard from "../Cards/AuthCard";
import Notification from "../UI/Notifications";

const RegisterPage = () => {
    return (
        <AuthCard title="SignUp" branding_logo="register.png">
            <Notification />
            <RegisterForm />
        </AuthCard>
    );
};
export default RegisterPage;
