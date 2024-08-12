const header = (props) => {
    const headerStyle = {
        backgroundColor: 'mediumseagreen',
        color: 'white'
    };

    return (
        <header style= {headerStyle}>
            <h1>{props.title}</h1>
        </header>
    )
}

header.defaultProps = {
    title: 'Shopping List Items'
}

export default header
