import React from "react";
import {Sample} from "./Sample";
import {QuestionnaireLayout} from "../components/QuestionnaireLayout/QuestionnaireLayout";

export function UxManaging(): JSX.Element {
    return (
        <QuestionnaireLayout
            title={"UX Managing"}
            description={
                <p>
                    De UX manager overziet de vraag en het probleem vanuit een holistisch
                    perspectief en heeft een sleutelrol binnen het team. Dat houdt in dat
                    deze persoon met kennis van tools en methodes en een heldere visie op
                    UX het juiste proces vormgeeft, maar ook zorgt voor teamontwikkeling
                    en stakeholdermanagement.
                </p>
            }
            questions={
                <>
                    <Sample/>
                </>
            }
            three={"placeholder"}
        />
    );
}
