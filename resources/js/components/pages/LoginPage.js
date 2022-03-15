import LoginForm from "../Auth/LoginForm";
import AuthCard from "../Cards/AuthCard";
import Notification from "../UI/Notifications";

const LoginPage = () => {
    return (
        <AuthCard>
            <Notification />
            <LoginForm />
        </AuthCard>
    );
};
export default LoginPage;
