import './NavBar.scss';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<div className="navBar">
			{/* <Link to="/home" className="logo">
				<img
					src="https://cdn2.iconfinder.com/data/icons/harrypotter/home.png"
					alt="logo"
				/>
			</Link> */}
			<img
				src="https://cdn2.iconfinder.com/data/icons/harrypotter/home.png"
				alt="logo"
			/>
			<div>BOOKS</div>
			<div>MOVIES</div>
			<div>CHARACTERS</div>
			<div>SPELLS</div>
			<div>POTIONS</div>
		</div>
	);
}
