import Header from "../components/Header"
import Posts from "../components/Posts"
import Sidebar from "../components/Sidebar"
import "../styles/home.css"

export default function Home(){
    return (
        <>
            <Header/>
            <div class="home">
                <Posts/>
                <Sidebar/>
            </div>
        </>

    )
}