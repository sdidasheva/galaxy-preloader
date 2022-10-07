import React from "react";
import styles from "./styles.module.scss";
import Background from "../Background/Background";

const Preloader = () => {
	return (
		<Background>
			<div className={styles.pageLoader}>
				<div className={styles.pageLoader__back}></div>
				<div className={styles.pageLoader__front}>
					<div className={styles.pageLoader__info}>
						<p>EURASIA GROUP</p>
					</div>
				</div>
			</div>
		</Background>
	);
};

export default Preloader;
