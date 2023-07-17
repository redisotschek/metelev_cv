const dividerStyles = {
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(0,0,0,0.1)',
    margin: '1rem 0'
}

export default function Divider({className}: {className?: string}) {
    return <div style={dividerStyles} className={className}></div>
}