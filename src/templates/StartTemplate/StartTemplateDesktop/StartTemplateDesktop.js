import React, { Component } from 'react';
import MenuDesktop from 'components/MenuDesktop/MenuDesktop';
import small_arrow from 'assets/images/small_arrow.svg';
import DescriptionPhoto from 'components/DescriptionPhoto/DescriptionPhoto';
import LoadAndNav from 'components/LoadAndNav/LoadAndNav';
import PropTypes from 'prop-types';
import {
  StyledMainWrapper,
  StyledContentWrapper,
  StyledPhoto,
  StyledWrapperArrow,
  StyledBar,
  StyledIcon,
  StyeldWrapperPosit,
  Number,
  StyledBigNumbrerP,
  StyledLastBox,
} from './StartTemplateDesktop.style';

class StartTemplateDesktop extends Component {
  state = {
    posit: 0,
    counter: 0,
    animationLoad: true,
    activeButtons: true,
    animation: [false, false, false, false],
    interval: setInterval(() => {
      const { counter } = this.state;
      if (counter === 3) {
        this.changePosit(235, false);
        this.setState({ counter: 0 });
        this.changeBord(3, false);
        setTimeout(() => {
          this.changeBord(0, true);
        }, 1500);
      } else {
        this.chosingPosition(true);
      }
    }, 6000),
  };

  componentDidMount() {
    setTimeout(() => {
      this.changeBord(0, true);
    }, 500);
  }

  changeBord = (int, bool) => {
    const { animation } = this.state;

    const animationValue = animation;
    animation[int] = bool;
    this.setState({ animation: animationValue });
  };

  changeAnimation = where => {
    const { counter } = this.state;

    if (where) {
      this.changeBord(counter, false);
      setTimeout(() => {
        this.changeBord(counter + 1, true);
      }, 1500);
    } else {
      this.changeBord(counter, false);
      setTimeout(() => {
        this.changeBord(counter - 1, true);
      }, 1500);
    }
    setTimeout(() => {
      this.setState({
        activeButtons: true,
      });
    }, 1500);
  };

  activeOtherFunctions = where => {
    const { activeButtons, interval } = this.state;
    if (activeButtons) {
      this.chosingPosition(where);
      clearInterval(interval);
      this.setState({ animationLoad: false });
      setTimeout(() => {
        this.setState({
          animationLoad: true,
          interval: setInterval(() => {
            const { counter } = this.state;
            if (counter === 3) {
              this.changePosit(235, false);
              this.setState({ counter: 0 });
              this.changeBord(3, false);
              setTimeout(() => {
                this.changeBord(0, true);
              }, 1500);
            } else {
              this.chosingPosition(true);
            }
          }, 6000),
        });
      }, 1500);
    }
  };

  chosingPosition = where => {
    const { counter } = this.state;
    this.setState({ activeButtons: false });
    switch (counter) {
      case 0:
        if (where) {
          this.changeAnimation(where);
          this.changePosit(83, where);
        }
        break;
      case 1:
        this.changeAnimation(where);
        this.changePosit(where === true ? 76 : 83, where);
        break;
      case 2:
        this.changeAnimation(where);
        this.changePosit(76, where);
        break;
      case 3:
        if (where === false) {
          this.changeAnimation(where);
          this.changePosit(76, where);
        }
        break;
      default:
        break;
    }
  };

  changePosit = (width, where) => {
    const { counter, posit } = this.state;
    this.setState({
      posit: where ? posit + -width : posit + width,
      counter: where ? counter + 1 : counter - 1,
    });
  };

  render() {
    const { edges } = this.props;
    console.log(edges);
    const { posit, animation, animationLoad } = this.state;
    return (
      <StyledMainWrapper>
        <MenuDesktop />
        <StyeldWrapperPosit>
          <StyledContentWrapper posit={posit}>
            <StyledPhoto bg={edges[0].node.image.file.url} />
            <DescriptionPhoto
              animation={animation[0]}
              title="Lorem impsum dolor is vite"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sed ornare mi, vitae rhoncus ex. Pellentesque gravida velit sit
                amet purus facilisis volutpat."
            />
            <StyledPhoto bg={edges[1].node.image.file.url} />
            <Number animation={animation[1]}>
              <StyledBigNumbrerP>2</StyledBigNumbrerP>
            </Number>
            <StyledPhoto bg={edges[2].node.image.file.url} />
            <Number animation={animation[2]}>
              <StyledBigNumbrerP>3</StyledBigNumbrerP>
            </Number>
            <StyledPhoto bg={edges[3].node.image.file.url} />
            <Number last animation={animation[3]}>
              <StyledBigNumbrerP>4</StyledBigNumbrerP>
            </Number>
            <StyledLastBox>
              <></>
            </StyledLastBox>
          </StyledContentWrapper>
        </StyeldWrapperPosit>
        <StyledBar>
          <StyledWrapperArrow
            toLeft
            onClick={() => this.activeOtherFunctions(false)}
          >
            <StyledIcon src={small_arrow} toLeft />
          </StyledWrapperArrow>
          <LoadAndNav activeElement={this.state.counter} load={animationLoad} />
          <StyledWrapperArrow onClick={() => this.activeOtherFunctions(true)}>
            <StyledIcon src={small_arrow} />
          </StyledWrapperArrow>
        </StyledBar>
      </StyledMainWrapper>
    );
  }
}

StartTemplateDesktop.PropTypes = {
  edges: PropTypes.arrayOf(),
};

export default StartTemplateDesktop;
