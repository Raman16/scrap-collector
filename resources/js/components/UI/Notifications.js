import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationContainer = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
};

const Notification = () => {
    return (
        <>
            {ReactDOM.createPortal(
                <NotificationContainer />,
                document.getElementById("notification-root")
            )}
        </>
    );
};
export default Notification;