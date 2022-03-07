const PageLayout = (props) => {
    return (
        <div className="basic-2">
            <div className="container">
                <div className="row">
                   {props.children}
                </div>
            </div>
        </div>
    );
};
export default PageLayout;
