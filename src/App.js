import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import {
  AppContainer,
  MainHeading,
  GameScoreContainer,
  ScoreHeadingContainer,
  HeadingContainer,
  ScoreHeading,
  ScoreCount,
  ImagesContainer,
  ImageButton,
  ImageElement,
  RulesContainer,
  RulesButton,
  CloseButton,
  RulesImageContainer,
  RulesImage,
  GameResultViewContainer,
  ObjectContainer,
  PlayerContainer,
  Heading,
  GameResultImageUrl,
  ResultHeading,
  PlayAgainButton,
} from './styledComponents'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    playerOne: 0,
    playerTwo: 1,
    count: 0,
    isSelectOption: true,
    isActiveId: '',
  }

  renderResultImage = id => {
    const {playerOne, playerTwo} = this.state
    const you = choicesList[playerOne]
    const opponent = choicesList[playerTwo]

    console.log(id)

    this.setState({playerOne: Math.floor(Math.random() * choicesList.length)})
    this.setState({playerTwo: Math.floor(Math.random() * choicesList.length)})
    this.setState(prevState => ({isSelectOption: !prevState.isSelectOption}))
    this.setState({isActiveId: id})

    /* if (you.id === 'ROCK' && opponent.id === 'SCISSORS') {
      this.setState(prevState => ({count: prevState.count + 1}))
    } else if (you.id === 'SCISSORS' && opponent.id === 'PAPER') {
      this.setState(prevState => ({count: prevState.count + 1}))
    } else if (you.id === 'PAPER' && opponent.id === 'ROCK') {
      this.setState(prevState => ({count: prevState.count + 1}))
    } else if (you.id === 'SCISSORS' && opponent.id === 'ROCK') {
      this.setState(prevState => ({count: prevState.count - 1}))
    } else if (you.id === 'PAPER' && opponent.id === 'SCISSORS') {
      this.setState(prevState => ({count: prevState.count - 1}))
    } else if (you.id === 'ROCK' && opponent.id === 'PAPER') {
      this.setState(prevState => ({count: prevState.count - 1}))
    } */

    if (id === 'PAPER') {
      if (opponent.id === 'SCISSORS') {
        this.setState(prevState => ({count: prevState.count - 1}))
      } else if (opponent.id === 'PAPER') {
        this.setState(prevState => ({count: prevState.count}))
      } else if (opponent.id === 'ROCK') {
        this.setState(prevState => ({count: prevState.count + 1}))
      }
    }

    if (id === 'ROCK') {
      if (opponent.id === 'SCISSORS') {
        this.setState(prevState => ({count: prevState.count + 1}))
      } else if (opponent.id === 'PAPER') {
        this.setState(prevState => ({count: prevState.count - 1}))
      } else if (opponent.id === 'ROCK') {
        this.setState(prevState => ({count: prevState.count}))
      }
    }

    if (id === 'SCISSORS') {
      if (opponent.id === 'SCISSORS') {
        this.setState(prevState => ({count: prevState.count}))
      } else if (opponent.id === 'PAPER') {
        this.setState(prevState => ({count: prevState.count + 1}))
      } else if (opponent.id === 'ROCK') {
        this.setState(prevState => ({count: prevState.count - 1}))
      }
    }
  }

  renderImagesButtons = () => (
    <ImagesContainer>
      {choicesList.map(choices => (
        <ImageButton
          key={choices.id}
          onClick={() => this.renderResultImage(choices.id)}
          data-testid={`${choices.id.toLowerCase()}Button`}
        >
          <ImageElement src={choices.imageUrl} alt={choices.id} />
        </ImageButton>
      ))}
    </ImagesContainer>
  )

  OnPlayGameAgain = () => {
    this.setState(prevState => ({
      isSelectOption: !prevState.isSelectOption,
    }))
  }

  decideWinner = () => {
    const {playerOne, playerTwo, isActiveId} = this.state
    const you = choicesList[playerOne]
    const opponent = choicesList[playerTwo]
    let results = ''

    /* if (you.id === 'ROCK' && opponent.id === 'SCISSORS') {
      results = 'YOU WON'
    } else if (you.id === 'SCISSORS' && opponent.id === 'PAPER') {
      results = 'YOU WON'
    } else if (you.id === 'PAPER' && opponent.id === 'ROCK') {
      results = 'YOU WON'
    } else if (you.id === 'SCISSORS' && opponent.id === 'ROCK') {
      results = 'YOU LOSE'
    } else if (you.id === 'PAPER' && opponent.id === 'SCISSORS') {
      results = 'YOU LOSE'
    } else if (you.id === 'ROCK' && opponent.id === 'PAPER') {
      results = 'YOU LOSE'
    } else if (you.id === opponent.id) {
      results = 'IT IS DRAW'
    } */

    if (isActiveId === 'PAPER') {
      if (opponent.id === 'SCISSORS') {
        results = 'YOU LOSE'
      } else if (opponent.id === 'PAPER') {
        results = 'IT IS DRAW'
      } else if (opponent.id === 'ROCK') {
        results = 'YOU WON'
      }
    }

    if (isActiveId === 'ROCK') {
      if (opponent.id === 'SCISSORS') {
        results = 'YOU WON'
      } else if (opponent.id === 'PAPER') {
        results = 'YOU LOSE'
      } else if (opponent.id === 'ROCK') {
        results = 'IT IS DRAW'
      }
    }

    if (isActiveId === 'SCISSORS') {
      if (opponent.id === 'SCISSORS') {
        results = 'IT IS DRAW'
      } else if (opponent.id === 'PAPER') {
        results = 'YOU WON'
      } else if (opponent.id === 'ROCK') {
        results = 'YOU LOSE'
      }
    }

    return results
  }

  renderGameResultView = () => {
    const {playerOne, playerTwo} = this.state
    const object = choicesList[playerOne]
    const object2 = choicesList[playerTwo]

    return (
      <GameResultViewContainer>
        <ObjectContainer>
          <PlayerContainer>
            <Heading>You</Heading>
            <GameResultImageUrl src={object.imageUrl} alt="your choice" />
          </PlayerContainer>
          <PlayerContainer>
            <Heading>Opponent</Heading>
            <GameResultImageUrl src={object2.imageUrl} alt="opponent choice" />
          </PlayerContainer>
        </ObjectContainer>
        <ResultHeading>{this.decideWinner()}</ResultHeading>
        <PlayAgainButton
          onClick={this.OnPlayGameAgain}
          data-testid="rockButton"
        >
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  render() {
    const {count, isSelectOption} = this.state
    return (
      <AppContainer>
        <GameScoreContainer>
          <HeadingContainer>
            <MainHeading>Rock Paper Scissors</MainHeading>
          </HeadingContainer>
          <ScoreHeadingContainer>
            <ScoreHeading>Score</ScoreHeading>
            <ScoreCount>{count}</ScoreCount>
          </ScoreHeadingContainer>
        </GameScoreContainer>
        {isSelectOption ? (
          <>{this.renderImagesButtons()}</>
        ) : (
          <>{this.renderGameResultView()}</>
        )}
        <RulesContainer>
          <Popup
            modal
            trigger={<RulesButton>RULES</RulesButton>}
            position="top center"
          >
            {close => (
              <RulesImageContainer>
                <CloseButton onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
                <div>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
              </RulesImageContainer>
            )}
          </Popup>
        </RulesContainer>
      </AppContainer>
    )
  }
}

export default App
