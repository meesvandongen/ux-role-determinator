import React from "react";
import {Link} from "react-router-dom";
import {PersonalRadarChart} from "./components/PersonalRadarChart";
import {Icon} from "./components/Icon/Icon";
import {Icons} from "./components/Icon/Icon";

export function Home(): JSX.Element {
    return (
        <div>
            <div className="flex flex-col place-items-center bg-[rgb(17,11,25)] py-16">
                <h1 className="text-gray-50">Kennis Matrix</h1>
                <PersonalRadarChart/>
            </div>

            <div
                className="container mx-auto grid grid-cols-2 content-center items-center justify-center gap-16 py-16 text-center font-bold">
                <Link className="rounded border border-gray-400 p-16" to={"writing"}>
                    <Icon icon={Icons.WRITING}/>
                    UX Writing
                </Link>
                <Link
                    className="rounded border border-gray-400 p-16"
                    to={"development"}
                >
                    <Icon icon={Icons.DEVELOPMENT}/>
                    UX Development
                </Link>
                <Link className="rounded border border-gray-400 p-16" to={"design"}>
                    <Icon icon={Icons.VISUAL_DESIGN}/>
                    UX Design
                </Link>
                <Link className="rounded border border-gray-400 p-16" to={"research"}>
                    <Icon icon={Icons.RESEARCH}/>
                    UX Research
                </Link>
                <Link className="rounded border border-gray-400 p-16" to={"managing"}>
                    <Icon icon={Icons.MANAGING}/>
                    UX Managing
                </Link>
            </div>
        </div>
    );
}
