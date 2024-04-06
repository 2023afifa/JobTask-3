import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-eczar bg-neutral-950 text-slate-200">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;