import React, { useContext, useEffect } from 'react';
import LinkToLobby from '../../components/LinkToLobby';
import ScramMaster from '../../components/ScramMaster';
import styles from './Lobby.module.scss';
import { StartButton } from '../../components/StartButton';
import CancelButton from '../../components/CancelButton';
import MembersField from '../../components/MembersField/MembersField';
import IssueField from '../../components/IssueField/IssueField';
import GameSettings from '../../components/GameSettings';
import CardField from '../../components/CardField';
import { GameInfo } from '../../components/GameInfo';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { Chat } from '../../components/chat';

export const Lobby: () => JSX.Element = () => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    console.log(globalState.game);

    useEffect(() => {
        const { provider } = globalState.ws;
        provider?.updateProviderState(globalState);
        if (!globalState.ws.socket) provider?.connects();
    }, [globalState]);

    return (
        <div className={styles.lobby}>
            <div className={styles.container}>
                <section className={styles.top}>
                    <GameInfo />
                    <ScramMaster />
                    <LinkToLobby />
                    <div className={styles.top__buttons}>
                        <StartButton />
                        <CancelButton />
                    </div>
                </section>
                <section className={styles.members}>
                    <h4>Members</h4>
                    <MembersField classNames={styles.members__cardField} />
                </section>
                <section className={styles.issues}>
                    <h4>Issues:</h4>
                    <IssueField classNames={styles.issues__cardField} />
                </section>
                <section className={styles.settings}>
                    <h4>Game settings:</h4>
                    <GameSettings />
                </section>
                <section className={styles.cards}>
                    <h4>Add card values:</h4>
                    <CardField classNames={styles.cards__cardField} />
                </section>
            </div>
            <Chat />
        </div>
    );
};
