const Header = () => {
    return (
        <header
            style={{
                backgroundColor: 'rgb(72, 61, 139)',
                boxShadow: '0 1px 1px #ccc',
                padding: '10px',
                height: '56px',
                color: '#ffffff',
                boxSizing: 'border-box',
                top: '-100px',
                WebkitTransition: 'top 0.3s',
                transition: 'top 0.3s',
            }}
        >
            {/* Header - limiter */}
            <div
                style={{
                    maxWidth: '1200px',
                    textAlign: 'center',
                    margin: '0 auto',
                }}
            >
                <div
                    style={{
                        float: 'left',
                        lineHeight: '40px',
                        margin: '0',
                        fontSize: '24px',
                        color: 'rgb(51, 153, 255)'
                    }}
                >
                    Quikie
                </div>
                <span
                    style={{
                        float: 'left',
                        lineHeight: '70px',
                        marginLeft: '-36px',
                        color: 'rgb(0, 0, 0)'
                    }}
                >
                    Apps
                </span>

            </div>
        </header>
    )
}

export default Header