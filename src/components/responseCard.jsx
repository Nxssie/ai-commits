import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Button} from "@nextui-org/react"
import {MdContentCopy} from "react-icons/md";
import {GiDinosaurRex} from "react-icons/gi";

export default function ResponseCard({value}) {

    const handleCopy = async () => {
        let clip = `${value.type}(${value.scope}): ${value.description} \n`
        value.changes.map((change) => {
            clip = clip.concat("- ", `${change.detail} \n`);
        })

        navigator.clipboard.writeText(clip).then(
            () => {
                /* success */
                console.log(JSON.stringify(value));
            },
            () => {
                /* failure */
                console.error("error")
            },
        )

    }

    return (
        <Card className="mt-6">
            <CardHeader className="flex gap-3">
                <GiDinosaurRex className="w-10 h-8"/>
                <div className="flex flex-col">
                    <p className="text-md">Nxssie</p>
                    <Link isExternal href="https://www.nxssie.com" size="sm" color="secondary">nxssie.com</Link>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <span>{value.type}({value.scope}): {value.description}</span>
                {value.changes != undefined && value.changes.length > 0 &&
                    <ul>
                        {value.changes.map((change) =>
                            <li key={change.key}>
                                - {change.detail}
                            </li>
                        )}
                    </ul>
                }
            </CardBody>
            <Divider/>
            <CardFooter className="flex gap-2 justify-end">
                <Button startContent={<MdContentCopy/>} onPress={handleCopy}>Copy</Button>
            </CardFooter>
        </Card>
    )
}