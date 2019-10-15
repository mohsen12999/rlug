const pstyle = {
    textAlign: "center",
    margin: "1rem"
}
const footerstyle = {
    background: "gray",
    padding: "1px",
    width: "100%"
}

export default function Footer() {
    return (
        <footer style={footerstyle}>
            <p style={pstyle}>طراحی توسط <a href="http://mohsenshabanian.com">محسن شعبانیان</a> با کمک <a href="https://getbootstrap.com">بوت استرپ</a></p>
        </footer>
    )
}