


class Topnav extends React.Component {
	render () {
		return(
			<div id="top-header">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<ul className="social-icon">
								<li><a href="https://facebook.com/softwaresourcecodes" className="fa fa-facebook" target="_blank"></a></li>
								<li><a href="https://www.linkedin.com/in/alger-makiputin-7b2351152/" className="fa fa-linkedin" target="_blank"></a></li>
								<li><a href="https://youtube.com/algermakiputin" className="fa fa-youtube" target="_blank"></a></li>
								<li><a href="https://github.com/algermakiputin" className="fa fa-github" target="_blank"></a></li>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
			)
	}
}

class Navbar extends React.Component {
	
	render() {
		return(
			<div className="navbar navbar-default" role="navigation" data-wow-delay="0.9s">
				<div className="container">
					<div className="navbar-header">
						<button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
							<span className="icon icon-bar"></span>
							<span className="icon icon-bar"></span>
							<span className="icon icon-bar"></span>
						</button>
						
						<a href="#" className="navbar-brand">
							<img src="images/logo.jpg" alt="Alger Makiputin Portfolio" />
						</a>
					</div>
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li className="active"><a href="#home" className="smoothScroll">HOME</a></li>
							<li><a href="#about" className="smoothScroll">ABOUT</a></li>
							<li><a href="#portfolio" className="smoothScroll">PORTFOLIO</a></li>
							<li><a href="https://itcsproject.blogspot.com">BLOG</a></li>
							<li><a href="#contact" className="smoothScroll">CONTACT</a></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

class Header extends React.Component {

	render() {
		return(
			<header id="home" className="text-center">
				<div className="templatemo_headerimage">
					<div className="flexslider">
						<ul className="slides">
							<li>
								<img src={("images/slider/hello.jpg")} id="img1" />
								<div className="slider-caption">
									<div className="templatemo_homewrapper">
										<h1 className="wow fadeInDown" data-wow-delay="2000">My Name is Alger </h1>
										<h2 className="wow fadeInDown" data-wow-delay="2000">
											<span>FULL STACK WEB DEVELOPER</span>
										</h2>
										<h2 className="wow fadeInDown" data-wow-delay="2000">
											
										</h2>
										<a href="#portfolio" className="smoothScroll btn btn-default wow fadeInDown" data-wow-delay="3000" id="portfolio-btn">View My Porfolio</a>	
										&nbsp;&nbsp;&nbsp;&nbsp;
										<a href="#about" id="about-btn" className="smoothScroll btn btn-default wow fadeInDown" data-wow-delay="3000">About Me </a>
									</div>
								</div>
							</li>

						</ul>
					</div>
				</div>				
			</header>
		)
	}
}

class MyApp extends React.Component {

  render () {
    return(
       	<div>
       		{/*<div className="bg-loader">
				<span className="text">Loading....</span>
			</div>*/}
			<Topnav />
			<Navbar />
			<Header />
       	</div>
      )
  }
}

ReactDOM.render(<MyApp />,document.getElementById('root'));