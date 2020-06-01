import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";

function Home() {
  return (
    <div>
      <Hero backgroundImage="https://images.unsplash.com/photo-1549814892-f6a520afc97d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
        <h1>venTTown</h1>
        <h2>Leave your troubles here</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Vented</h5>
                <p className="card-text">
                  {" "}
                  Old lady (55) looking for older to chat. (Not blocking anyone,
                  though) Covid isolation is doing me in. So tired of being
                  locked in home with my adult kids and my pets. A bit buzzed,
                  who wants to chat?{" "}
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Vented</h5>
                <p className="card-text">
                  {" "}
                  Old lady (55) looking for older to chat. (Not blocking anyone,
                  though) Covid isolation is doing me in. So tired of being
                  locked in home with my adult kids and my pets. A bit buzzed,
                  who wants to chat?{" "}
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Vented</h5>
                <p className="card-text">
                  {" "}
                  Old lady (55) looking for older to chat. (Not blocking anyone,
                  though) Covid isolation is doing me in. So tired of being
                  locked in home with my adult kids and my pets. A bit buzzed,
                  who wants to chat?{" "}
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Vented</h5>
                <p className="card-text">
                  Lately, it’s been more than difficult to watch the news and it
                  is becoming even harder to bear witness to our country’s slow
                  and agonizing destruction. It is as if we are passengers on a
                  plane that has been hijacked by a group...
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Vented</h5>
                <p className="card-text">
                  {" "}
                  Old lady (55) looking for older to chat. (Not blocking anyone,
                  though) Covid isolation is doing me in. So tired of being
                  locked in home with my adult kids and my pets. A bit buzzed,
                  who wants to chat?{" "}
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Vented</h5>
                <p className="card-text">
                  Lately, it’s been more than difficult to watch the news and it
                  is becoming even harder to bear witness to our country’s slow
                  and agonizing destruction. It is as if we are passengers on a
                  plane that has been hijacked by a group...
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;