import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
import "./style.css";

class Avatar extends Component {
    componentDidMount() {
        $("button").click(function () {
            $("h1").toggleClass("red");
        });

        $(".inicio99").click(function () {
            $(".es99").css("background-image", "url('beelogoanimation.gif')");
            $(".avatardisplay").show();
            $("#follow9").remove();
            $("#vamosa9").remove();
        });

        $("#incognito").mouseenter(function () {
            $(".es1").append("<img id='bodyimage' src='blackfire.png'></img>");
        });

        $("#incognito").mouseleave(function () {
            $("#bodyimage").remove();
        });

        $("#blaster").mouseenter(function () {
            $(".es1").append("<img id='bodyimage' src='coolcrazy.png'></img>");
        });

        $("#blaster").mouseleave(function () {
            $("#bodyimage").remove();
        });

        $("#standard1").mouseenter(function () {
            $(".es1").append("<img id='bodyimage' src='whitey.png'></img>");
        });

        $("#standard1").mouseleave(function () {
            $("#bodyimage").remove();
        });

        $("#standard2").mouseenter(function () {
            $(".es1").append("<img id='bodyimage' src='brown.png'></img>");
        });

        $("#standard2").mouseleave(function () {
            $("#bodyimage").remove();
        });

        $("#standard3").mouseenter(function () {
            $(".es1").append("<img id='bodyimage' src='greendude.png'></img>");
        });

        $("#standard3").mouseleave(function () {
            $("#bodyimage").remove();
        });

        $("#incognito").click(function () {
            $(".cleani").remove();
            $("#bodyimage").replaceWith(
                "<img class='cleani' id='bodyimages' src='blackfire.png'></img>"
            );
        });

        $("#blaster").click(function () {
            $(".cleani").remove();
            $("#bodyimage").replaceWith(
                "<img class='cleani' id='bodyimages' src='coolcrazy.png'></img>"
            );
        });

        $("#standard1").click(function () {
            $(".cleani").remove();
            $("#bodyimage").replaceWith(
                "<img class='cleani' id='bodyimages' src='whitey.png'></img>"
            );
        });

        $("#standard2").click(function () {
            $(".cleani").remove();
            $("#bodyimage").replaceWith(
                "<img class='cleani' id='bodyimages' src='brown.png'></img>"
            );
        });

        $("#standard3").click(function () {
            $(".cleani").remove();
            $("#bodyimage").replaceWith(
                "<img class='cleani' id='bodyimages' src='greendude.png'></img>"
            );
        });

        //eyes/

        $("#eyes1").mouseenter(function () {
            $(".es2").append("<img id='eyesimage' src='eyes.png'></img>");
        });

        $("#eyes1").mouseleave(function () {
            $("#eyesimage").remove();
        });

        $("#eyes2").mouseenter(function () {
            $(".es2").append("<img id='eyesimage' src='eyes4.png'></img>");
        });

        $("#eyes2").mouseleave(function () {
            $("#eyesimage").remove();
        });

        $("#eyes3").mouseenter(function () {
            $(".es2").append("<img id='eyesimage' src='eyes2.png'></img>");
        });

        $("#eyes3").mouseleave(function () {
            $("#eyesimage").remove();
        });

        $("#eyes1").click(function () {
            $(".cleani2").remove();
            $("#eyesimage").replaceWith(
                "<img class='cleani2' id='eyesimages' src='eyes.png'></img>"
            );
        });

        $("#eyes2").click(function () {
            $(".cleani2").remove();
            $("#eyesimage").replaceWith(
                "<img class='cleani2' id='eyesimages' src='eyes4.png'></img>"
            );
        });

        $("#eyes3").click(function () {
            $(".cleani2").remove();
            $("#eyesimage").replaceWith(
                "<img class='cleani2' id='eyesimages' src='eyes2.png'></img>"
            );
        });
        //hair/

        $("#hair1").mouseenter(function () {
            $(".es3").append("<img id='hairimage' src='hairblack.png'></img>");
        });

        $("#hair1").mouseleave(function () {
            $("#hairimage").remove();
        });

        $("#hair2").mouseenter(function () {
            $(".es3").append("<img id='hairimage' src='hairblack2.png'></img>");
        });

        $("#hair2").mouseleave(function () {
            $("#hairimage").remove();
        });

        $("#hair3").mouseenter(function () {
            $(".es3").append("<img id='hairimage' src='hairhat.png'></img>");
        });

        $("#hair3").mouseleave(function () {
            $("#hairimage").remove();
        });

        $("#hair4").mouseenter(function () {
            $(".es3").append("<img id='hairimage' src='h1.png'></img>");
        });

        $("#hair4").mouseleave(function () {
            $("#hairimage").remove();
        });

        $("#hair5").mouseenter(function () {
            $(".es3").append("<img id='hairimage' src='h2.png'></img>");
        });

        $("#hair5").mouseleave(function () {
            $("#hairimage").remove();
        });

        $("#hair6").mouseenter(function () {
            $(".es3").append("<img id='hairimage' src='h3.png'></img>");
        });

        $("#hair6").mouseleave(function () {
            $("#hairimage").remove();
        });

        $("#hair7").mouseenter(function () {
            $(".es3").append("<img id='hairimage' src='h4.png'></img>");
        });

        $("#hair7").mouseleave(function () {
            $("#hairimage").remove();
        });

        $("#hair8").mouseenter(function () {
            $(".es3").append("<img id='hairimage' src='h5.png'></img>");
        });

        $("#hair8").mouseleave(function () {
            $("#hairimage").remove();
        });

        $("#hair1").click(function () {
            $(".cleani3").remove();
            $("#hairimage").replaceWith(
                "<img class='cleani3' id='hairimages' src='hairblack.png'></img>"
            );
        });

        $("#hair2").click(function () {
            $(".cleani3").remove();
            $("#hairimage").replaceWith(
                "<img class='cleani3' id='hairimages' src='hairblack2.png'></img>"
            );
        });

        $("#hair3").click(function () {
            $(".cleani3").remove();
            $("#hairimage").replaceWith(
                "<img class='cleani3' id='hairimages' src='hairhat.png'></img>"
            );
        });

        $("#hair4").click(function () {
            $(".cleani3").remove();
            $("#hairimage").replaceWith(
                "<img class='cleani3' id='hairimages2' src='h1.png'></img>"
            );
        });

        $("#hair5").click(function () {
            $(".cleani3").remove();
            $("#hairimage").replaceWith(
                "<img class='cleani3' id='hairimages2' src='h2.png'></img>"
            );
        });

        $("#hair6").click(function () {
            $(".cleani3").remove();
            $("#hairimage").replaceWith(
                "<img class='cleani3' id='hairimages2' src='h3.png'></img>"
            );
        });

        $("#hair7").click(function () {
            $(".cleani3").remove();
            $("#hairimage").replaceWith(
                "<img class='cleani3' id='hairimages2' src='h4.png'></img>"
            );
        });

        $("#hair8").click(function () {
            $(".cleani3").remove();
            $("#hairimage").replaceWith(
                "<img class='cleani3' id='hairimages2' src='h5.png'></img>"
            );
        });

        //ropa/

        $("#ropa1").mouseenter(function () {
            $(".es4").append("<img id='ropaimage' src='dress.png'></img>");
        });

        $("#ropa1").mouseleave(function () {
            $("#ropaimage").remove();
        });

        $("#ropa2").mouseenter(function () {
            $(".es4").append("<img id='ropaimage' src='outf2.png'></img>");
        });

        $("#ropa2").mouseleave(function () {
            $("#ropaimage").remove();
        });

        $("#ropa3").mouseenter(function () {
            $(".es4").append("<img id='ropaimage' src='outf5.png'></img>");
        });

        $("#ropa3").mouseleave(function () {
            $("#ropaimage").remove();
        });

        $("#ropa4").mouseenter(function () {
            $(".es4").append("<img id='ropaimage' src='outfi4.png'></img>");
        });

        $("#ropa4").mouseleave(function () {
            $("#ropaimage").remove();
        });

        $("#ropa5").mouseenter(function () {
            $(".es4").append("<img id='ropaimage' src='outfit3.png'></img>");
        });

        $("#ropa5").mouseleave(function () {
            $("#ropaimage").remove();
        });

        $("#ropa1").click(function () {
            $(".cleani4").remove();
            $("#ropaimage").replaceWith(
                "<img class='cleani4' id='ropaimages' src='dress.png'></img>"
            );
        });

        $("#ropa2").click(function () {
            $(".cleani4").remove();
            $("#ropaimage").replaceWith(
                "<img class='cleani4' id='ropaimages' src='outf2.png'></img>"
            );
        });

        $("#ropa3").click(function () {
            $(".cleani4").remove();
            $("#ropaimage").replaceWith(
                "<img class='cleani4' id='ropaimages' src='outf5.png'></img>"
            );
        });

        $("#ropa4").click(function () {
            $(".cleani4").remove();
            $("#ropaimage").replaceWith(
                "<img class='cleani4' id='ropaimages' src='outfi4.png'></img>"
            );
        });

        $("#ropa5").click(function () {
            $(".cleani4").remove();
            $("#ropaimage").replaceWith(
                "<img class='cleani4' id='ropaimages' src='outfit3.png'></img>"
            );
        });

        //background//

        $("#bb2").click(function () {
            $(".es99").css(
                "background-image",
                "url('https://cutewallpaper.org/21/retro-game-backgrounds/Game-background-GIFs-Get-the-best-GIF-on-GIPHY.gif')"
            );
        });

        $("#bb3").click(function () {
            $(".es99").css("background-image", "url('back9.gif')");
            $(".es99").css("background-position", "289px 227px");
            $(".es99").css("background-size", "287px 201px");
        });

        $("#bb4").click(function () {
            $(".es99").css("background-image", "url('dp.gif')");
            $(".es99").css("background-position", "431px 171px");
            $(".es99").css("background-size", "538px 182px");
        });

        $("#bb5").click(function () {
            $(".es99").css("background-image", "url('forrest.gif')");
            $(".es99").css("background-position", "497px 171px");
            $(".es99").css("background-size", "571px 185x");
        });

        $("#bb6").click(function () {
            $(".es99").css("background-image", "url('volcano.gif')");
            $(".es99").css("background-position", "492px 171px");
            $(".es99").css("background-size", "254px 143x");
        });

        $("#bb7").click(function () {
            $(".es99").css("background-image", "url('castle.gif')");
            $(".es99").css("background-position", "396px 177px");
            $(".es99").css("background-size", "547px 227x");
        });

        $("#bb8").click(function () {
            $(".es99").css("background-image", "url('bathroom.gif')");
        });

        $("#bb9").click(function () {
            $(".es99").css("background-image", "url('washer.gif')");
        });

        $("#bb10").click(function () {
            $(".es99").css("background-image", "url('city.gif')");
            $(".es99").css("background-position", "406px 177px");
            $(".es99").css("background-size", "598px 293x");
        });
        
        $("#bb11").click(function () {
            $(".es99").css("background-image", "url('waterfall.gif')");
        });
    }

    render() {
        return (
            <div>
                <div className="testingDiv">
                    <h1>jquery in React App</h1>
                    <button>Click Me</button>
                </div>
                <div className="Avatar">
                    <div class="container">
                        <div class="row">
                            <div class="col-12  avatardisplay menuavatar">
                                <div class="row">
                                    <div class="col-12 this">
                                    </div>
                                    <div class="col-2 this bodya">
                                        <h6 id="avatarmenu">BODY</h6>
                                        <h6 id="incognito">Incognito</h6>
                                        <h6 id="blaster">Blaster</h6>
                                        <h6 id="standard1">Standard</h6>
                                        <h6 id="standard2">Standard</h6>
                                        <h6 id="standard3">Mr.Green</h6>
                                        <h6 id="cool">Cool</h6>
                                        <h6 id="who">Who is this?</h6>
                                    </div>
                                    <div class="col-2 this eyesa">
                                        <h6 id="avatarmenu">EYES</h6>
                                        <h6 id="eyes1">eyes1</h6>
                                        <h6 id="eyes2">eyes2</h6>
                                        <h6 id="eyes3">eyes3</h6>
                                    </div>
                                    <div class="col-2 this haira">
                                        <h6 id="avatarmenu">STYLE</h6>
                                        <h6 id="hair1">Style1</h6>
                                        <h6 id="hair2">Styl2</h6>
                                        <h6 id="hair3">Style3</h6>
                                        <h6 id="hair4">Style4</h6>
                                        <h6 id="hair5">Style5</h6>
                                        <h6 id="hair6">Style6</h6>
                                        <h6 id="hair7">Style7</h6>
                                        <h6 id="hair8">Style8</h6>
                                    </div>
                                    <div class="col-2 this cloth">
                                        <h6 id="ropa1">WEAR</h6>
                                        <h6 id="ropa2">Outfit1</h6>
                                        <h6 id="ropa3">Outfit2</h6>
                                        <h6 id="ropa4">Outfit3</h6>
                                        <h6 id="ropa5">Outfit4</h6>
                                    </div>
                                    <div class="col-3 this Backround">
                                        <h6 id="b1">LOCATION</h6>
                                        <h6 id="bb2">Place1</h6>
                                        <h6 id="bb3">Place2</h6>
                                        <h6 id="bb4">Place3</h6>
                                        <h6 id="bb5">Place4</h6>
                                        <h6 id="bb6">Place5</h6>
                                        <h6 id="bb7">Place6</h6>
                                        <h6 id="bb8">Place7</h6>
                                        <h6 id="bb9">Place8</h6>
                                        <h6 id="bb10">Place9</h6>
                                        <h6 id="bb11">Place10</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row col-6 this">
                            <div class="col-9  avatardisplay es99">
                                <div class="col-12  avatardisplay es1">
                                    <div class="col-12  avatardisplay es2">
                                        <div class="col-12  avatardisplay es3">
                                            <div class="col-12  avatardisplay es4">
                                                <div class="col-12  avatardisplay es5">
                                                    <h6 id="follow9">Create Your avatar</h6>
                                                </div>
                                                <div class="col-12  avatardisplay"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Avatar;
