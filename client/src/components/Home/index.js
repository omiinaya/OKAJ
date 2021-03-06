import React, { Component } from "react";
import { Row, Col } from "../Grid";
import { PostList, PostListItem } from "../PostList";
import Hero from "../Hero";
import Footer from "../Footer";
import axios from "axios";
import EmptyList from "../EmptyList";
import TagSection from "../TagSection";
import Thumbnail from "../Thumbnail";
import { AvatarTesting } from "../AvatarTesting";
import "./style.css";
import {
  MDBRow,
  MDBCol
} from "mdbreact";

class Home extends Component {
  state = {
    savedPosts: [],
    initialized: true,
  };

  componentDidMount() {
    this.getPosts();
  }

  handleOnClickA(a) {
    if (localStorage.usertoken != null) {
      this.props.history.push("/posts/" + a.id)
    } else {
      this.props.history.push("/login")
    }
  }

  handleOnClickB(a) {
    if (localStorage.usertoken != null) {
      this.props.history.push("/posts/")
    } else {
      this.props.history.push("/login")
    }
  }

  getPosts = () => {
    axios
      .get("/posts/all")
      .then((res) => {
        this.setState({ savedPosts: res.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container-home">
        <Hero backgroundImage="https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
          <MDBRow>
            <MDBCol size="12">
              <h1 className="hero-title animate__animated animate__swing">beeherd</h1>
              <h2 className="hero-subtitle">Leave your troubles here</h2>
            </MDBCol>
          </MDBRow>
        </Hero>
        <div className="mini-post" onClick={() => this.handleOnClickB()}>
          <input type="text" id="mini-post-text" size="50" placeholder="Say something." onClick={() => this.handleOnClickB()}></input>
        </div>
        <div>
          <Row>
            <Col size="md-9">
              {this.state.savedPosts.length > 0 ?
                <PostList>
                  {this.state.savedPosts.slice(0).reverse().map(posts => {
                    return (
                      <div className="post-card" onClick={() => this.handleOnClickA(posts)} >
                        <div>
                          <PostListItem
                            id={posts.author_id}
                            author={posts.author_tag}
                            title={posts.post_title}
                            content={posts.post_content}
                          />
                        </div>
                      </div>
                    );
                  })}
                </PostList>
                :
                <EmptyList />
              }
            </Col>
            <Col size="md-3">
              <div className="side-bar-top">
                <AvatarTesting className="avatar-display-home" />
                <div className="button-container">
                  <button className="customize-button" onClick={() => {
                    this.props.history.push("/customize")
                  }
                  }>Customize</button>
                </div>
              </div>
              <div className="side-bar-middle">
                <TagSection />
              </div>
              <div className="side-bar-bottom">
                <Thumbnail />
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
