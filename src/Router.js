import React from 'react';
import { Navigator } from 'react-native';
import { connect} from 'react-redux';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Splash from './components/Splash';
import ArticleIndex from './components/ArticleIndex';
import UserShow from './components/UserShow';
import ArticleShow from './components/ArticleShow';
import Icon from 'react-native-vector-icons/FontAwesome';
import { playCurrentArticle } from './actions';

const RouterComponent = (props) => {
  return (
    <Router
      navigationBarStyle={styles.headerBackgroundStyle}
      titleStyle={styles.titleStyle}
      hideNavBar={true}
      >
    <Scene key="auth">
      <Scene
        key='splash'
        component={Splash}
        type={ActionConst.REPLACE}
        />
      <Scene
        hideNavBar={false}
        key="login"
        component={LoginForm}
        direction='vertical'
        title="Log in"
        />
      <Scene
        hideNavBar={false}
        direction='vertical'
        key="signup"
        component={SignupForm}
        title="Sign up"
        />
    </Scene>
    <Scene key="main">
      <Scene
        navigationBarStyle={styles.newHeaderStyle}
        titleStyle={styles.titleStyle}
        sceneStyle={ styles.bannerStyle }
        hideNavBar={false}
        key="articleFeed"
        renderBackButton={()=>null}
        component={ArticleIndex}
        title="Feed"
        rightButtonTextStyle={styles.titleStyle}
        rightTitle={<Icon name="cog" size={25} />}
        onRight={() =>  Actions.userShow()}
        />
      <Scene
        navigationBarStyle={styles.newHeaderStyle}
        titleStyle={styles.titleStyle}
        hideNavBar={false}
        key="userShow"
        renderBackButton={()=>null}
        component={UserShow}
        rightButtonTextStyle={styles.titleStyle}
        title="Settings"
        rightTitle={<Icon name="th-large" size={25} />}
        onRight={() => Actions.articleFeed()}
        />
      <Scene
        navigationBarStyle={styles.newHeaderStyle}
        sceneStyle={ styles.bannerStyle }
        titleStyle={styles.titleStyle}
        hideNavBar={false}
        key="articleShow"
        component={ArticleShow}
        rightTitle={<Icon name="play" size={20} />}
        rightButtonTextStyle={styles.titleStyle}
        onRight={() => props.playCurrentArticle(props.currentArticle)}
        title="Article"
        />
    </Scene>

    </Router>
  );
};

const styles = {
  bannerStyle: {
    paddingTop: 65
  },
  loginHeaderStyle: {
    backgroundColor: 'rgba(203,79,131, 1)',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
  },
  headerBackgroundStyle: {
    backgroundColor:'transparent',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent'
  },
  newHeaderStyle: {
    backgroundColor:'#87DBFD',
    borderBottomWidth: 0,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    borderBottomColor: 'transparent',
  },
  titleStyle: {
    color: '#334B5D'
  }

};

const mapStateToProps = state => ({
  currentArticle: state.currentArticle
});

const mapDispatchToProps = dispatch => ({
  playCurrentArticle: (article) => dispatch(playCurrentArticle(article))
});

export default connect(mapStateToProps, mapDispatchToProps)(RouterComponent);
