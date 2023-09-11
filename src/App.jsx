import './App.css'
import ButtonSubmit from "./components/buttonSubmit.jsx";
import {useState} from "react";
import TextArea from "./components/textArea.jsx";
import ResponseCard from "./components/responseCard.jsx";

function App() {
    const [commit, setCommit] = useState("");
    const [diff, setDiff] = useState("");

    return (
        <main className="container max-w-lg m-auto flex flex-col">
            <header className="py-4">
                <h1 className="text-3xl font-bold">AI-Powered Commits</h1>
            </header>

            <TextArea value={diff} setValue={setDiff}/>

            <ButtonSubmit diff={diff} setCommit={setCommit}/>
            {commit != "" &&
                <ResponseCard value={commit}/>
            }

        </main>
    )
}

export default App
