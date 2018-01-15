import React from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

import PairingBoard from './PairingBoard.js';

class PairingBoardList extends React.Component {
    render() {
        return (
            <div className="pairing-boards">
                {this.props.pairingBoards.map((pairingBoard, idx) => {
                    const settings = this.props.pairingBoardSettings[pairingBoard.id] || {};

                    return <PairingBoard
                                key={idx}
                                id={pairingBoard.id}
                                name={pairingBoard.name}
                                exempt={pairingBoard.exempt}
                                people={pairingBoard.people}
                                editMode={settings.editMode || false}
                                editErrorMessage={settings.editErrorMessage}
                                renamePairingBoard={this.props.renamePairingBoard}
                                deletePairingBoard={this.props.deletePairingBoard}
                                movePerson={this.props.movePerson}
                                setPairingBoardEditMode={this.props.setPairingBoardEditMode}
                            />
                })}
            </div>
        )
    }
}

PairingBoardList.propTypes = exact({
    pairingBoards: PropTypes.arrayOf(PropTypes.object).isRequired,
    pairingBoardSettings: PropTypes.object.isRequired,
    renamePairingBoard: PropTypes.func.isRequired,
    deletePairingBoard: PropTypes.func.isRequired,
    movePerson: PropTypes.func.isRequired,
    setPairingBoardEditMode: PropTypes.func.isRequired
});

export default PairingBoardList;



