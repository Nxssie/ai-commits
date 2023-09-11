import {Textarea} from "@nextui-org/react";

export default function TextArea({value, setValue}) {

    const handleChange = (value) => {
        setValue(value);
    }

    return(
        <Textarea
            placeholder="Put your git diff"
            className="w-full"
            value={value}
            onValueChange={value => handleChange(value)}
        />
    )
}