import Badge from '../atoms/Badge'
import Button from '../atoms/Button'
import '../../styles.css'

const StockTable = () => {
    const onClickViewBtn = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="table">
            <div className="table-container">
                <div className="table-content">
                    <table className="table-layout">
                        <colgroup></colgroup>
                        <thead className="table-head">
                            <tr>
                                <th className="table-cell">COMPANY NAME</th>
                                <th className="table-cell">SYMBOL</th>
                                <th className="table-cell">MARKET CAP</th>
                                <th className="table-cell"></th>
                                <th className="table-cell">CURRENT PRICE</th>
                            </tr>
                        </thead>
                        <tbody className="table-tbody">
                            <tr className="table-row">
                                <td className="table-cell">141 Capital Inc</td>
                                <td className="table-cell">
                                    <Badge name="ONCP" />
                                </td>
                                <td className="table-cell">$145.4K</td>
                                <td className="table-cell">
                                    <Button
                                        color={'blue'}
                                        name={'VIEW'}
                                        onClickHandler={onClickViewBtn}
                                    />
                                </td>
                                <td className="table-cell">
                                    <span>$0.001</span>
                                    <br></br>
                                    <span
                                     style={{paddingLeft: '16px'}}
                                    >USD</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default StockTable