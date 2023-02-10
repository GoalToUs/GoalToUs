import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home'
import Login from "../pages/Login";
import Join from "../pages/Join";
import CreateTeam from "../pages/CreateTeam";
import Team from "../pages/Team";
import JoinTeam from "../pages/JoinTeam";
import CreateMatch from "../pages/CreateMatch";
import TeamHome from "../pages/TeamHome";
import MatchAnalysis from "../pages/MatchAnalysis";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>}/>
                <Route path={"/join"} element={<Join/>}/>
                <Route path={"/team"} element={<Team/>}/>
                <Route path={"/team/join"} element={<JoinTeam/>}/>
                <Route path={"/team/create"} element={<CreateTeam/>}/>
                <Route path={"/match/create"} element={<CreateMatch/>}/>
                <Route path={"/team/home"} element={<TeamHome/>}/>
                <Route path={"/team/match/analysis"} element={<MatchAnalysis/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
