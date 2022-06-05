import "./intro.css"
import Me from "../../img/me.jpg";

const Intro = () => {
return (
<div className="i">
	<div className="i-left">
		<div className="i-left-wrapper">
			<h2 className="i-intro">Hello, My name is</h2>
			<h1 className="i-name">Narantyo Maulana A.N</h1>
			<div className="i-title">
				<div className="i-title-wrapper">
					<div className="i-title-item">Web Developer</div>
					<div className="i-title-item">Full Stack Web Developer</div>
				</div>
			</div>
			<p className="i-desc">
			I was born on May 18, 2001, my birthplace was in Banjarnegara, Central Java, Indonesia. But I grew up in Purwokerto, therefore I really like him since I was little in Purwokerto. in purwokerto I get a lot of new things that are very useful especially in the rapid development of technology.
			</p>
		</div>
	</div>
	<div className="i-right">
		<div className="i-bg">
		<img src={Me} alt="" className="i-me-img" />
		</div>
	</div>
</div>
)
}


export default Intro



