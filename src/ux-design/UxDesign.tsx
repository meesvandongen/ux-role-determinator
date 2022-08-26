import React from "react";
import {Graphics} from "./questions/Graphics";
import {Icon} from "./icon/Icon";
import {Prototyping} from "./questions/Prototyping";
import {UiTheory} from "./questions/UiTheory";
import {UserInterface} from "./questions/UserInterface";
import {QuestionnaireLayout} from "../components/QuestionnaireLayout/QuestionnaireLayout";

export function UxDesign(): JSX.Element {
    return (
        <QuestionnaireLayout
            title={'Visual / interface design'}
            description={
                <>
                    <p>
                        Een UX Designer is een expert in user-centred design, doordat
                        hij/zij, mede door het werk van de UX researcher, doelen en context
                        van de gebruikers begrijpt. Hij/zij is daardoor in staat interacties
                        te ontwerpen die gebruikers helpen om het product gemakkelijk te
                        ontdekken, te gebruiken en ervan te genieten.
                    </p>
                </>
            }
            three={<Icon/>}
            questions={
                <>
                    <Prototyping/>
                    <Graphics/>
                    <UserInterface/>
                    <UiTheory/>
                </>
            }
        />
    );
}
