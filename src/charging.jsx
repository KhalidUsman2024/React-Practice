import "./charging.css";

function Charging(){
    return (
        <>
        <h1>Charging Support</h1>
        <div id="Container">
            <div className="chargeCard">
                <img src="./home-charging.png" alt="" />
                <h4>Home Charging</h4>
                <p>Easily charge your EV overnight with a standard wall outlet or a dedicated home charging station. Wake up every morning to a fully powered battery, ready for your daily drive.</p>
            </div>

            <div className="chargeCard">
                <img src="./fast-charging.png" alt="" />
                <h4>Fast Charging</h4>
                <p>Access thousands of public fast-charging stations to boost your battery in less than an hour. Perfect for quick stops during road trips or busy days on the go.</p>
            </div>

            <div className="chargeCard">
                <img src="./super-fast.webp" alt="" />
                <h4>Home Charging</h4>
                <p>Experience cutting-edge charging speeds that add hundreds of miles in just minutes. Ideal for long journeys where every moment counts.</p>
            </div>
        </div>

        </>
    )
}

export default Charging;