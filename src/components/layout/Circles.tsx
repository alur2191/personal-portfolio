import styles from './circles.module.scss'
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { store } from '../../app/store';
type RootState = ReturnType<typeof store.getState>;
const useThemeSelector: TypedUseSelectorHook<RootState> = useSelector;

interface Coordinates {
	x?: number;
	y?: number;
}

function Circles() {
	let coordinates: Coordinates;
	coordinates = useThemeSelector((state) => state.theme.globalCoordinates);
	const y = coordinates.y||820
	const x = coordinates.x||-110
	return (
		<div className={styles.container}>
			<div className={styles.circle9} style={{top:y/25-130,right:x/120-100}}>
				<div className={styles.circle8} style={{top:y/5,right:x/10}}>
					<div className={styles.circle7} style={{top:y/10,right:x/15}}>
						<div className={styles.circle6} style={{top:y/15,right:x/30}}>
							<div className={styles.circle5} style={{top:y/20,right:x/40}}>
								<div className={styles.circle4} style={{top:y/30,right:x/65}}>
									<div className={styles.circle3} style={{top:y/40,right:x/80}}>
										<div className={styles.circle2} style={{top:y/45,right:x/70}}>
											<div className={styles.circle} style={{top:y/60,right:x/120}}></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

}

export default Circles;
