import './Card.css'
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/theme';

function Card({name, image, id}) {

	const navigate = useNavigate();
	const {theme} = useTheme();
	
		
	const handleClick = () => {
	navigate(`/detail/${id}`);
	};
	

	return (
		<figure className='card' onClick={handleClick}>
			<img className={theme === "dark" ? "img-card-dark" : "img-card-light"} src={image} alt="Rick Sanchez" />
			<figcaption>{name}</figcaption>
		</figure>
	)
}

export default Card;