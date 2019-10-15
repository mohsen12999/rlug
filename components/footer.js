const pstyle = {
    textAlign: "center"
}
const footerstyle = {
    position: "fixed",
    background: "gray",
    bottom: 0,
    paddingTop: "60px",
    marginTop: "60px",
    width: "100%"
}

export default function Footer() {
    return (
        <footer style={footerstyle}>
            <p style={pstyle}>طراحی توسط <a href="http://mohsenshabanian.com">محسن شعبانیان</a> با کمک <a href="https://getbootstrap.com">بوت استرپ</a></p>
        </footer>
    )
}