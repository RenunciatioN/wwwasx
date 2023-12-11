import { FC } from 'react'
import styles from './Video.module.scss';

const Video: FC = ({}) => {
    return (
        <div className={styles.videoWrapper}> 
             <video src="/video-prolog.mp4" autoPlay={false} height={510} ></video>
        </div>
    );
};

export { Video }