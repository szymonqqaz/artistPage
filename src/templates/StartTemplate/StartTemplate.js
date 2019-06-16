import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  StyledMainTemplate,
  StyledMainText,
  StyledFirstP,
  StyledSecoundP,
  StyledWrapperNav,
  StyledButton,
  StyledIcon,
  StyledCenterWrapper,
  StyledNumber,
  StyledLoad,
} from 'templates/StartTemplate/StartTemplatePhone.style';
import small_arrow from 'assets/images/small_arrow.svg';

class StartTemplate extends Component {
  state = {
    imageNubmer: 0,
    activeAnimation: '',
    acitveAnimationLoad: true,
    buttonActiveClic: true,
    howTime: setInterval(() => {
      const { imageNubmer } = this.state;
      this.setState({
        activeAnimation: 'leave',
      });

      setTimeout(() => {
        this.setState({
          imageNubmer: imageNubmer === 3 ? 0 : imageNubmer + 1,
          activeAnimation: 'next',
        });
      }, 800);
    }, 6000),
  };

  animationTo = where => {
    const { buttonActiveClic } = this.state;
    if (buttonActiveClic) {
      const { imageNubmer, howTime } = this.state;
      this.setState({
        activeAnimation: where === 'right' ? 'leave' : 'leaveLeft',
        acitveAnimationLoad: false,
        buttonActiveClic: false,
      });
      clearInterval(howTime);

      setTimeout(() => {
        this.setState({
          activeAnimation: where === 'right' ? 'next' : 'nextLeft',
          acitveAnimationLoad: true,
        });
        if (where === 'right') {
          this.setState({
            imageNubmer: imageNubmer === 3 ? 0 : imageNubmer + 1,
          });
        } else {
          this.setState({
            imageNubmer: imageNubmer === 0 ? 3 : imageNubmer - 1,
          });
        }
        this.setState({
          howTime: setInterval(() => {
            const { imageNubmer } = this.state;
            this.setState({
              activeAnimation: 'leave',
            });

            setTimeout(() => {
              this.setState({
                imageNubmer: imageNubmer === 3 ? 0 : imageNubmer + 1,
                activeAnimation: 'next',
              });
            }, 800);
          }, 6000),
        });
      }, 800);
      setTimeout(() => {
        this.setState({
          buttonActiveClic: true,
        });
      }, 1300);
    }
  };

  render() {
    const { imageNubmer, activeAnimation, acitveAnimationLoad } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query {
            allContentfulStronaGlownaZjecie {
              edges {
                node {
                  id
                  title
                  description {
                    description
                  }
                  image {
                    id
                    file {
                      url
                      fileName
                      contentType
                    }
                    resize {
                      width
                      height
                      aspectRatio
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allContentfulStronaGlownaZjecie: { edges } }) => (
          <>
            <StyledMainTemplate
              active={activeAnimation}
              image={edges[imageNubmer].node.image.file.url}
            >
              {imageNubmer === 0 && (
                <>
                  <StyledMainText>
                    <StyledFirstP>Lorem impusum dolor is vite</StyledFirstP>
                    <StyledSecoundP>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam sed ornare mi, vitae rhoncus ex. Pellentesque
                      gravida velit sit amet purus facilisis volutpat.
                    </StyledSecoundP>
                  </StyledMainText>
                </>
              )}
            </StyledMainTemplate>
            <StyledWrapperNav>
              <StyledButton onClick={() => this.animationTo()}>
                <StyledIcon src={small_arrow} />
              </StyledButton>
              <StyledCenterWrapper>
                <StyledNumber>0{imageNubmer + 1}/04</StyledNumber>
                <StyledLoad active={acitveAnimationLoad} />
              </StyledCenterWrapper>
              <StyledButton onClick={() => this.animationTo('right')}>
                <StyledIcon src={small_arrow} secound />
              </StyledButton>
            </StyledWrapperNav>
          </>
        )}
      />
    );
  }
}

export default StartTemplate;
