import "./collection.css";

function Collection(){
    return (
        <>
        <h1>Our Collection</h1>
        <div id="container">
             <div className="card">
                   <img src="./Tesla-Y.jpg" alt="" />
                   <h3>Tesla Model Y</h3>
                   <p>$50,000</p>
                   <button>Complete Details</button>
             </div>

             <div className="card">
                   <img src="./Porshche-Taycan.jpg" alt="" />
                   <h3>Porsche TayCan</h3>
                   <p>$232,000</p>
                   <button>Complete Details</button>
             </div>


             <div className="card">
                   <img src="./model3.webp" alt="" />
                   <h3>Tesla Model 3</h3>
                   <p>$60,000</p>
                   <button>Complete Details</button>
             </div>


             <div className="card">
                   <img src="./K-ev6.jpg" alt="" />
                   <h3>Kia Ev 6</h3>
                   <p>$65,000</p>
                   <button>Complete Details</button>
             </div>


             <div className="card">
                   <img src="./egt.jpg" alt="" />
                   <h3>Etron GT</h3>
                   <p>$170,000</p>
                   <button>Complete Details</button>
             </div>


             <div className="card">
                   <img src="./benz-Eqs.avif" alt="" />
                   <h3>Benz Eqs</h3>
                   <p>$120,000</p>
                   <button>Complete Details</button>
             </div>


             
        </div>
        </>
    )
}

export default Collection;