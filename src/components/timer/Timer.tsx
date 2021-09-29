import { useTheme } from '@material-ui/core';
import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from './timer.module.scss';

type Props = {
    seconds: number;
    start: boolean;
    onComplete: () => void;
};
export const Timer = (props: Props) => {
    const { seconds, start, onComplete } = props;
    const timerProps = {
        isPlaying: start,
        size: 110,
        strokeWidth: 10,
    };
    const theme = useTheme();
    const renderTime = (dimension: string, time: number) => {
        return (
            <div>
                <div className={styles.time}>{time}</div>
                <div>{dimension}</div>
            </div>
        );
    };
    return (
        <CountdownCircleTimer
            {...timerProps}
            colors={[
                [theme.palette.primary.main, 0.25],
                [theme.palette.primary.light, 0.25],
                [theme.palette.secondary.main, 0.25],
                [theme.palette.primary.dark, 0.25],
            ]}
            duration={seconds}
            onComplete={onComplete}
        >
            {({ remainingTime }) => renderTime('seconds', remainingTime ?? seconds)}
        </CountdownCircleTimer>
    );
};