import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-eczar">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;