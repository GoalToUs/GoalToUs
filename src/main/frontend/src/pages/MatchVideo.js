import styled from "styled-components";
import Header from "../components/Header";

import SideBar from "../components/Sidebar";
import { ThumbNail1, ThumbNail4 } from "../assets";

function MatchVideo() {
  return (
    <Styled.Root>
      <SideBar />
      <Header noLogo />
      <Styled.Container>
        <Styled.CenterContainer>
          <Styled.VideoContainer>
            <Styled.Video
              target="_blank"
              href={
                "https://goaltous-bucket.s3.us-west-1.amazonaws.com/match-video/match_video.mp4"
              }
            >
              <img src={ThumbNail1} width={300} height={200} />
            </Styled.Video>
            <Styled.Info>23.05.17</Styled.Info>
            <Styled.Info className={"opponentTeam"}>LEO</Styled.Info>
          </Styled.VideoContainer>
          <Styled.VideoContainer>
            <Styled.Video
              target="_blank"
              href={
                "https://goaltous-bucket.s3.us-west-1.amazonaws.com/final_match_video_2.mp4"
              }
            >
              <img src={ThumbNail4} width={300} height={200} />
            </Styled.Video>
            <Styled.Info>23.01.08</Styled.Info>
            <Styled.Info className={"opponentTeam"}>Jupiter</Styled.Info>
          </Styled.VideoContainer>
        </Styled.CenterContainer>
      </Styled.Container>
    </Styled.Root>
  );
}

export default MatchVideo;

const Styled = {
  Root: styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
  `,
  Container: styled.div`
    @media (max-width: 1279px) {
      width: 1280px;
    }
    @media (min-width: 1280px) {
      width: 100vw-226px;
    }
    margin-left: 226px;
    padding: 0 40px;
  `,
  CenterContainer: styled.div`
    width: 1080px;
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
  `,
  VideoContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 20px 30px;
  `,
  Video: styled.a`
    width: 300px;
    height: 200px;
  `,
  Info: styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 34px;
    &.opponentTeam {
      color: #8e8e8e;
    }
  `,
};
