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
import MatchPending from "../pages/MatchPending";
import MatchVideo from "../pages/MatchVideo";
import SearchTeam from "../pages/SearchTeam";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>}/>
                <Route path={"/join"} element={<Join/>}/>
                <Route path={"/team"} element={<Team/>}/>
                <Route path={"/team/join"} element={<JoinTeam/>}>
                    <Route path={":searchWord"} element={<SearchTeam/>}/>
                </Route>
                <Route path={"/team/create"} element={<CreateTeam/>}/>
                <Route path={"/match/create"} element={<CreateMatch/>}/>
                <Route path={"/team/home/:teamName"} element={<TeamHome/>}/>
                <Route path={"/team/match/analysis/:matchId"} element={<MatchAnalysis/>}/>
                <Route path={"/team/match/pending"} element={<MatchPending/>}/>
                <Route path={"/team/match/video"} element={<MatchVideo/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
