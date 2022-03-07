import LoginForm from "../Auth/LoginForm";
import AuthCard from "../Cards/AuthCard";
import Notification from "../UI/Notifications";
const LoginPage = () => {
    return (
        <AuthCard title="Welcome" branding_logo="login.png">
            <Notification />
            <LoginForm />
        </AuthCard>
    );
};
export default LoginPage;
