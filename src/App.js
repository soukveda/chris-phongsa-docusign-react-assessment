import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import PageContainer from "./components/PageContainer/PageContainer";
import { connect } from "react-redux";
import AddLikeButton from "./components/AddLikeButton/AddLikeButton";
import RemoveLikeButton from "./components/RemoveLikeButton/RemoveLikeButton";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PageContainer likes={this.props.likes} />
        <AddLikeButton changeLikes={()=>this.props.addLike(1)}/>
        <RemoveLikeButton changeLikes={()=>this.props.removeLike(1)}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    likes: state.likes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLike: (number) => {
      dispatch({
        type: "ADD_LIKE",
        payload: number,
      });
    },
    removeLike: (number) => {
      dispatch({
        type: "REMOVE_LIKE",
        payload: number,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
