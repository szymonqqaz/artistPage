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
} from 'templates/StartTemplate.style';
import small_arrow from 'assets/images/small_arrow.svg';

class StartTemplate extends Component {
  state = {
    imageNubmer: 0,
    activeAnimation: '',
    acitveAnimationLoad: true,
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

  //cofanie , do przodu, oraz cały czas;
  //cofnięcie sie przez wyszystkie

  animationToLeft = () => {
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
  };

  changeNumber = a => {
    const { imageNubmer, howTime } = this.state;
    if (a === 'add') {
      this.setState({
        activeAnimation: 'leave',
        acitveAnimationLoad: false,
      });
      clearInterval(howTime);

      setTimeout(() => {
        this.setState({
          activeAnimation: 'next',
          imageNubmer: a === 'add' ? imageNubmer + 1 : imageNubmer - 1,
          acitveAnimationLoad: true,
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
              <StyledButton>
                <StyledIcon src={small_arrow} />
              </StyledButton>
              <StyledCenterWrapper>
                <StyledNumber>0{imageNubmer + 1}/04</StyledNumber>
                <StyledLoad active={acitveAnimationLoad} />
              </StyledCenterWrapper>
              <StyledButton onClick={() => this.changeNumber('add')}>
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
