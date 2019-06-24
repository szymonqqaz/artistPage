import React, { Component } from 'react';
import MenuDesktop from 'components/MenuDesktop/MenuDesktop';
import small_arrow from 'assets/images/small_arrow.svg';
import DescriptionPhoto from 'components/DescriptionPhoto/DescriptionPhoto';
import LoadAndNav from 'components/LoadAndNav/LoadAndNav';
import { nextTick } from 'q';
import { throws } from 'assert';
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
    buttonClic: true,
    animation: [false, false, false, false],
    interval: setInterval(() => {
      if (this.state.counter === 3) {
        console.log('chcę zmienić na mniej');
        this.changeState(235, false);
        this.setState({ counter: 0 });
        let animationConst = this.state.animation;
        animationConst[3] = false;
        this.setState({ animation: animationConst });
        setTimeout(() => {
          let animationConst = this.state.animation;
          animationConst[0] = true;
          this.setState({ animation: animationConst });
        }, 1500);
      } else {
        this.changefuncAn(true);
      }
    }, 6000),
  };

  componentDidMount() {
    const { animation } = this.state;

    setTimeout(() => {
      const animationConst = animation;
      animationConst[0] = true;
      this.setState({ animation: animationConst });
    }, 500);
  }

  changeAnimation = where => {
    const { counter, animation, interval } = this.state;

    console.log(counter);

    if (where) {
      let animationConst = animation;
      animationConst[counter] = false;
      this.setState({ animation: animationConst });
      setTimeout(() => {
        animationConst[counter + 1] = true;
        this.setState({ animation: animationConst });
      }, 1500);
    } else {
      const animationConst = animation;
      animationConst[counter] = false;
      this.setState({ animation: animationConst });
      setTimeout(() => {
        animationConst[counter - 1] = true;
        this.setState({ animation: animationConst });
      }, 1500);
    }
    setTimeout(() => {
      this.setState({
        buttonClic: true,
      });
    }, 1500);
  };

  changeFunc = b => {
    const { buttonClic, interval } = this.state;
    if (buttonClic) {
      this.changefuncAn(b);
      clearInterval(interval);
      this.setState({ animationLoad: false });
      setTimeout(() => {
        this.setState({
          animationLoad: true,
          interval: setInterval(() => {
            if (this.state.counter === 3) {
              console.log('chcę zmienić na mniej');
              this.changeState(235, false);
              this.setState({ counter: 0 });
              let animationConst = this.state.animation;
              animationConst[3] = false;
              this.setState({ animation: animationConst });
              setTimeout(() => {
                let animationConst = this.state.animation;
                animationConst[0] = true;
                this.setState({ animation: animationConst });
              }, 1500);
            } else {
              this.changefuncAn(true);
            }
          }, 6000),
        });
      }, 1500);
    }
  };

  changefuncAn = b => {
    const { counter } = this.state;
    this.setState({ buttonClic: false });
    switch (counter) {
      case 0:
        if (b) {
          this.changeAnimation(b);
          this.changeState(83, b);
        }
        break;
      case 1:
        this.changeAnimation(b);
        this.changeState(b === true ? 76 : 83, b);
        break;
      case 2:
        this.changeAnimation(b);
        this.changeState(76, b);
        break;
      case 3:
        if (b === false) {
          this.changeAnimation(b);
          this.changeState(76, b);
        }
        break;
      default:
        break;
        console.log('dugi counter: ' + this.state.counter);
    }
  };

  changeState = (a, b) => {
    const { counter, posit } = this.state;
    this.setState({
      posit: b ? posit + -a : posit + a,
      counter: b ? counter + 1 : counter - 1,
    });
  };

  render() {
    const { edges } = this.props;
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
          <StyledWrapperArrow toLeft onClick={() => this.changeFunc(false)}>
            <StyledIcon src={small_arrow} toLeft />
          </StyledWrapperArrow>
          <LoadAndNav activeElement={this.state.counter} load={animationLoad} />
          <StyledWrapperArrow onClick={() => this.changeFunc(true)}>
            <StyledIcon src={small_arrow} />
          </StyledWrapperArrow>
        </StyledBar>
      </StyledMainWrapper>
    );
  }
}

export default StartTemplateDesktop;
