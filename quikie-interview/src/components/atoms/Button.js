const Button = ({ color, name, onClickHandler }) => {
    return (
        <button
            style={{
                backgroundColor: `${color}`,
                boxSizing: 'border-box',
                color: '#fff',
                textShadow: '0 -1px 0 rgba(0, 0, 0, 0.12)',
                fontWeight: '400',
                whiteSpace: 'nowWrap',
                textAlign: 'center',
                cursor: 'pointer',
                fontSize: '14px',
                textTransform: 'none',
                position: 'relative',
                display: 'inline-block',
                border: '1px solid transparent',
                transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                userSelect: 'none',
                height: '32px',
                padding: '4px 15px',
                borderRadius: '2px',
            }}
            onClick={(e) => onClickHandler(e)}
        >
            <span
                style={{
                    display: 'inline-block',
                }}
            >
                {name}
            </span>
        </button>
    )
}

export default Button