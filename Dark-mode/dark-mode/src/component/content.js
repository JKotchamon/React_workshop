import light from '../image/light.svg'
import dark from '../image/dark.svg'

const Content = ()=>{
    return(
        <main>
            <div>
                <h1>GUidehansome Official</h1>
                <p>DarkMode Workshop</p>
            </div>
            <img src={light} alt="Logo"></img>
        </main>
    );
}

export default Content;