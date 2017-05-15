// Import React
import React from "react";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

const codeFontSize = 15;

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  flo: require('../assets/flo.jpg'),
  flow: require('../assets/flow-site.png'),
  jsFlow: require("../assets/styled-components-js-flow.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck progress="bar" transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Flow - A Practical Guide
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" textSize={50} bold>
            Thomas Ladd
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" textSize={30} bold>
            Help.com
          </Text>
        </Slide>
        <Slide bgImage={images.flo.replace("/", "")} />
        <Slide>
          <Image style={{ width: '100%' }} src={images.flow.replace("/", "")} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Why Use Flow?</Heading>
          <List>
            <Appear><ListItem>Documentation</ListItem></Appear>
            <Appear><ListItem>IDE Integrations</ListItem></Appear>
            <Appear>
              <ListItem>
                Prevent runtime errors
                <List style={{ marginLeft: '60px' }}>
                  <ListItem>Catch bugs early</ListItem>
                  <ListItem>More confidently change code</ListItem>
                </List>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        { /*
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Flow vs. Other Type Systems</Heading>
          <List>
            <Appear>
              <ListItem>
                Structural vs. Nominal Typing
                <CodePane textSize={30} source={require("raw-loader!../assets/structural-typing.example")} />
              </ListItem>
            </Appear>
            <Appear><ListItem>Type Inference</ListItem></Appear>
            <Appear><ListItem>If it passes, hard to have runtime errors</ListItem></Appear>
          </List>
        </Slide>
        */ }
        <Slide>
          <Text textSize={70}>Examples</Text>
        </Slide>
        { /*
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Flow vs. Typescript</Heading>
          <List>
            <Appear><ListItem>{ 'Don\'t get the impression either is significantly better than the other right now for React projects' }</ListItem></Appear>
            <Appear><ListItem>Both influence each other a lot</ListItem></Appear>
            <Appear><ListItem>Flow is a checker while Typescript is a compiler</ListItem></Appear>
            <Appear><ListItem>Flow is written in OCaml. Typescript is written in Typescript</ListItem></Appear>
            <Appear><ListItem>Flow generally is stricter</ListItem></Appear>
          </List>
        </Slide>
        */ }
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Setup</Heading>
          <List>
            <Appear><ListItem>Install flow-bin</ListItem></Appear>
            <Appear><ListItem>Install and use babel-preset-flow</ListItem></Appear>
            <Appear><ListItem>Run flow init</ListItem></Appear>
            <Appear><ListItem>{ "Start annotating files with // @flow" }</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Flow-typed</Heading>
          <List>
            <Appear><ListItem>Package and CLI tool for sharing third-party library type defenitions</ListItem></Appear>
            <Appear><ListItem>Most common libraries already covered</ListItem></Appear>
            <Appear><ListItem>Install flow-typed as a dev dependency</ListItem></Appear>
            <Appear><ListItem>Requires no effort from library maintainers</ListItem></Appear>
            <Appear><ListItem>Not much of a concept of ownership of library definitions</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Sharing types across packages</Heading>
          <List>
            <Appear><ListItem>Babel removes flow types</ListItem></Appear>
            <Appear><ListItem>Need a way to pass type information along as well</ListItem></Appear>
            <Appear><ListItem>Use flow-copy-source to copy all of your source files and append .js.flow</ListItem></Appear>
            <Appear><ListItem>Experimental flow gen-flow-files</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Sharing types across packages</Heading>
          <Image height="580" src={images.jsFlow.replace("/", "")} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Runtime Checks</Heading>
          <List>
            <ListItem>babel-plugin-flow-react-proptypes</ListItem>
            <ListItem>flow-runtime</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Tips For Progressively Adding Flow</Heading>
          <List>
            <Appear><ListItem>Start typing new and modified files</ListItem></Appear>
            <Appear><ListItem>Focus on areas that are going to catch the most</ListItem></Appear>
            <Appear><ListItem><Link href="https://github.com/billyvg/codemod-proptypes-to-flow">codemod-proptypes-to-flow</Link> to convert from PropTypes to flow</ListItem></Appear>
            <Appear><ListItem>Shoot for complete coverage, but be at peace when it is not possible</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Gripes</Heading>
          <List>
            <Appear><ListItem>Class method binding</ListItem></Appear>
            <Appear><ListItem>jsx children syntax</ListItem></Appear>
            <Appear><ListItem>HOCs</ListItem></Appear>
            <Appear><ListItem>Flow checks node_modules, so may have to ignore packages that have type errors</ListItem></Appear>
            <Appear><ListItem>Not always obvious if typing is incorrect or flow bug</ListItem></Appear>
            <Appear><ListItem>Documentation on some higher-level features hard to come by</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Tradeoffs</Heading>
          <Appear>
            <List>
              <Text>Good</Text>
              <ListItem>Documentation</ListItem>
              <ListItem>IDE Integrations</ListItem>
              <ListItem>
                Prevent runtime errors
                <List style={{ marginLeft: '60px' }}>
                  <ListItem>Catch bugs early</ListItem>
                  <ListItem>More confidently change code</ListItem>
                </List>
              </ListItem>
            </List>
          </Appear>
          <Appear>
            <List>
              <Text size={5}>Bad</Text>
              <ListItem>Early frustrations</ListItem>
              <ListItem>Time to learn flow and accurately type files</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Types are Tests</Heading>
          <List>
            <Appear><ListItem>Can cover 100% of code</ListItem></Appear>
            <Appear><ListItem>Catches inconsistencies across files that unit tests cannot</ListItem></Appear>
            <Appear><ListItem>Amount of additional time spent typing files drastically decreases the longer you use flow</ListItem></Appear>
            <Appear><ListItem>Instant feedback</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Resources</Heading>
          <List>
            <ListItem><Link href="https://flow.org/en/docs/">{ 'Flow Docs' }</Link></ListItem>
            <ListItem><Link href="https://medium.com/@ryyppy/shipping-flowtype-definitions-in-npm-packages-c987917efb65">{ 'Shipping Flowtype Definitions in NPM Packages' }</Link></ListItem>
            <ListItem><Link href="https://medium.com/@thejameskyle/type-systems-structural-vs-nominal-typing-explained-56511dd969f4">{ 'Type Systems: Structural vs. Nominal typing explained' }</Link></ListItem>
            <ListItem><Link href="https://github.com/reactjs/redux/tree/master/examples/todos-flow">{ 'Redux Todos Flow Example' }</Link></ListItem>
            <ListItem><Link href="http://djcordhose.github.io/flow-vs-typescript/flow-typescript-2.html#/">{ 'Flow vs Typescript Presentation' }</Link></ListItem>
            <ListItem><Link href="https://www.youtube.com/watch?v=V1po0BT7kac">{ 'Type Systems Will Make You a Better JavaScript Developer - React Conf 2017' }</Link></ListItem>
            <ListItem><Link href="https://www.youtube.com/watch?v=lk8o7ym29WM">{ 'Flow Typing a React Codebase - React Amsterdam 2017' }</Link></ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
