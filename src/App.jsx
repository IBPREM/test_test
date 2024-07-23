import './styles/styles.css';
import {inventory} from "./constants/inventory.js"
import {bestSellingTv} from "./constants/inventory.js"
import {bestImage,bought,needToBeSold,bestName,bestPrice,screensSize,applicable,buttonMost,buttonCheap, buttonSport, sold} from "./functions/function.js"


function App() {


    return (
        <>
            <div className="wrapper">
                <header>
                    <h1>
                        Tech it easy dashboard
                    </h1>
                </header>
            </div>
            <div className="wrapper">
                <main>
                    <section>
                        <h2>Verkoopoverzicht</h2>
                        <div className="BoxWrapper">
                            <div className="box sold">
                                <p>Aantal verkochte</p>
                                <p>producten</p>
                                <h3>{sold(inventory, bestSellingTv)}</h3>
                            </div>

                            <div className="box bought">
                                <p>Aantal ingekochte</p>
                                <p>producten</p>
                                <h3>{bought(inventory, bestSellingTv)}</h3>
                            </div>

                            <div className="box tosell">
                                <p>Aantal te verkopen</p>
                                <p>producten</p>
                                <h3>{needToBeSold(bought(inventory, bestSellingTv), sold(inventory, bestSellingTv))}</h3>
                            </div>

                        </div>
                    </section>
                    <h2>Best verkochte TV</h2>
                    <section className="bestsold">
                        <div className="image-wrapper">
                            <img src={bestImage(bestSellingTv)} alt="Best selling TV"/>
                        </div>
                        <section>
                            <h3>{bestName(bestSellingTv)}</h3>
                            <h3>{bestPrice(bestSellingTv)}</h3>
                            <p>{screensSize(bestSellingTv)}</p>

                            <div className="applicable">
                                <div className="appImageWrapper">
                                    <img src={applicable(bestSellingTv, "wifi")}/>
                                </div>
                                <p>wifi</p>

                                <div className="appImageWrapper">
                                    <img src={applicable(bestSellingTv, "speech")}/>
                                </div>
                                <p>speech</p>

                                <div className="appImageWrapper">
                                    <img src={applicable(bestSellingTv, "hdr")}/>
                                </div>
                                <p>hdr</p>

                                <div className="appImageWrapper">
                                    <img src={applicable(bestSellingTv, "bluetooth")}/>
                                </div>
                                <p>bluetooth</p>


                                <div className="appImageWrapper">
                                    <img src={applicable(bestSellingTv, "ambiLight")}/>
                                </div>
                                <p>ambiLight</p>
                            </div>

                        </section>
                    </section>
                </main>
            </div>

            <div className="wrapper">
                <footer>
                    <nav>
                        <ul>
                            <li>
                                <button type="button" onClick={buttonMost}>Meest verkocht eerst</button>
                                </li>
                            <li>
                                <button type="button" onClick={buttonCheap}>Goedkoopste eerst</button>
                            </li>

                            <li>
                                <button type="button" onClick={buttonSport}>Meest geschikt voor sport
                                    eerst
                                </button>
                            </li>
                        </ul>

                    </nav>
                </footer>
            </div>


        </>
    )
}

export default App
