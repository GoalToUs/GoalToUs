import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home'
import Login from "../pages/Login";
import Join from "../pages/Join";
import CreateTeam from "../pages/CreateTeam";
import Team from "../pages/Team";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>}/>
                <Route path={"/join"} element={<Join/>}/>
                <Route path={"/team"} element={<Team/>}/>
                {/*<Route path={"/team/join"} element={}/>*/}
                <Route path={"/team/create"} element={<CreateTeam/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
