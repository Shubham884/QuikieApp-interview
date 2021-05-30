const Badge = ({ title }) => {
    return (
        //container
        <div
            style={{
                boxSizing: 'border-box',
                color: 'rgb(51, 153, 255)',
                backgroundColor: 'rgb(232,232,232)',
                fontSize: '8px',
                lineHeight: '1.5715',
                minWidth: '52px',
                height: '26px',
                display: 'inline-block',
                verticalAlign: 'middle',
                borderRadius: '100px',
                border: '0',
                userSelect: 'none',

            }}
        >
            <span
                style={{
                    lineHeight: 'inherit',
                    verticalAlign: 'baseline',
                    boxSizing: 'border-box',
                    margin: '0',
                    padding: '0',
                    color: 'rgba(0, 0 , 0, 0.85)',
                    listStyle: 'none',
                    position: 'relative',
                    display: 'inline-block'
                }}
            >
                {/* dot */}
                <span
                    style={{
                        backgroundColor: 'rgb(51, 153, 255)',
                        position: 'relative',
                        top: '-1px',
                        display: 'inline-block',
                        width: '6px',
                        height: '6px',
                        verticalAlign: 'middle',
                        borderRadius: '50%',
                        boxSizing: 'border-box',
                        marginLeft: '5px'
                    }}
                >
                </span>
                {/* badge text */}
                <span
                    style={{
                        marginLeft: '8px',
                        color: 'rgb(51, 153, 255)',
                        fontSize: '14px',
                        padding: '5px'
                    }}
                >
                    ONCP
                    {/* {title} */}
                </span>
            </span>
        </div>
    )
}

export default Badge