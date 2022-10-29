import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  background-size: cover;
  padding: 40px;
  display: flex;
  flex-direction: column;
`

export const GameScoreContainer = styled.div`
  border: 2px solid #ffffff;
  padding: 10px;
  padding-left: 50px;
  padding-right::50px;
  border-radius:10px;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`
export const HeadingContainer = styled.div`
  width: 10%;
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 30px;
`
export const ScoreHeadingContainer = styled.div`
  background-color: #ffffffff;
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-right: 10px;
`

export const ScoreHeading = styled.p`
  font-family: 'Bree Serif';
  font-size: 20px;
  color: #223a5f;
  font-weight: bold;
`

export const ScoreCount = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: #223a5f;
  font-weight: bold;
`

export const ImagesContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-self: center;
  margin-top: 30px;
`

export const ImageButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ImageElement = styled.img`
  height: 200px;
  width: 200px;
`

export const RulesContainer = styled.div`
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: flex-end;
  align-items: flex-end;
`

export const RulesButton = styled.button`
  height: 40px;
  width: 150px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  outline: none;
  color: #223a5f;
`
export const CloseButton = styled.button`
  height: 40px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 30px;
  align-self: flex-end;
  cursor: pointer;
`
export const RulesImageContainer = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
`
export const RulesImage = styled.img`
  height: 80%;
  width: 100%;
  padding: 20px;
`

export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ObjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  margin-bottom: 10px;
  margin-top: 60px;
`
export const GameResultImageUrl = styled.img`
  height: 250px;
`
export const ResultHeading = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  margin-bottom: 10px;
`

export const PlayAgainButton = styled.button`
  height: 40px;
  width: 150px;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`
