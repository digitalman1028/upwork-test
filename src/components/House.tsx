import { FC } from "react"

interface Props {
    name: string,
    animal: string
    founder: string,
}

const House: FC<Props> = ({ name, animal, founder }) => {
    return (
        <div className="p-5 flex flex-col justify-center gap-5 w-[500px] shadow-2xl border-2 border-gray-200 rounded-xl">
            <div className="flex flex-row justify-between items-center">
                <label className="text-[28px] font-bold">{name}</label>
                <label className="text-[16px] font-semibold">{animal}</label>
            </div>
            <div className="bg-gradient-to-r from-white to-black h-[30px]  rounded-lg"></div>
            <div className="text-[16px] font-semibold">
                <label>Founder: </label>
                <label className="font-bold">{founder}</label>
            </div>
        </div>
    )
}

export default House