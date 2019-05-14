import React from 'react';

const RandomTable = ({randomTable}) => {
    return (
        <div id="random-table">
            <table className="table table-bordered">
                <tbody>
                {
                    randomTable.map((memberRow, idx) => (
                        <tr className={(idx === 0) ? 'table-active' : ''}>
                            {
                                memberRow.map(member =>
                                    (<td>{member}</td>)
                                )
                            }
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default RandomTable;