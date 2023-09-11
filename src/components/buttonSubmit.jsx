import {getCommitMsg} from "../services/ai.js";
import {Button} from "@nextui-org/react";
import {useState} from "react";
import {FaCode} from "react-icons/fa6";

export default function ButtonSubmit({diff, setCommit}) {
    const [isLoading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        getCommitMsg(diff).then((res) => {
            console.log(res);
            setCommit(res);
            setLoading(false);
        })

    }

    return(
        <Button onPress={handleClick} color="primary" endContent={<FaCode/>} isLoading={isLoading} type="button" title={"test"} className="flex items-center mt-2 font-semibold text-md">
            Generate!
        </Button>
    );
}